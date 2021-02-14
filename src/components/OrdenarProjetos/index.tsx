import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { MdAddBox } from 'react-icons/md';
import { FiDelete } from 'react-icons/fi';
import { CgPlayListRemove } from 'react-icons/cg';
import { RiArrowDropLeftLine } from 'react-icons/ri';
import { AiOutlineArrowUp } from 'react-icons/ai';

import { Preloader, ThreeDots } from 'react-preloader-icon';

import api from '../../services/api';

import { useAuth } from '../../context/AuthContext';

import {
  Container,
  CheckboxLabel,
  List,
  Enterprise,
  Image,
  Details,
  Text,
  Button,
  LoadingIcon,
  BackToTop,
} from './styles';

import 'react-toastify/dist/ReactToastify.css';

interface EmpreendimentoData {
  id: number;
  nome: string;
  descricao_curta: string;
  descricao: string;
  endereco: string;
  banner: string;
  poster: string;
}

const OrdenarProjetos: React.FC = () => {
  const { user } = useAuth();

  const [enterprises, setEnterprises] = useState<EmpreendimentoData[] | null>(null);
  const [addedEnterprises, setAddedEnterprises] = useState<EmpreendimentoData[] | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [checkbox, setCheckbox] = useState(false);
  const [sendDataLoading, setSendDataLoading] = useState(false);
  const [isDataSended, setIsDataSended] = useState(false);

  const containObj = (obj: EmpreendimentoData, list: EmpreendimentoData[] | null) => {
    if (list) {
      for (let i = 0; i < list.length; i += 1) {
        if (list[i] === obj) return true;
      }
    }

    return false;
  };

  const handleAddEnterprise = (
    item: EmpreendimentoData,
    list: EmpreendimentoData[] | null,
  ) => {
    if (!list) {
      setAddedEnterprises([item]);
      return;
    }

    if (!containObj(item, list)) {
      setAddedEnterprises([...list, item]);
    }
  };

  const handleRemoveEnterprise = (id: number, list: EmpreendimentoData[]) => {
    if (list) {
      const newList = list.filter(item => item.id !== id);

      setAddedEnterprises(newList);
    }

    if (list.length < 1) {
      setAddedEnterprises(null);
    }
  };

  const handleSendNewOrder = async (list: EmpreendimentoData[] | null) => {
    setIsDataSended(false);
    setSendDataLoading(true);

    if (!list) {
      setSendDataLoading(false);

      return;
    }

    if (list && enterprises) {
      if (list[0].id === enterprises[0].id && list.length === 1) {
        setSendDataLoading(false);

        notify('A lista já possui essa ordem!', 'error');

        return;
      }
    }

    if (JSON.stringify(list) === JSON.stringify(enterprises)) {
      setSendDataLoading(false);

      notify('A lista já possui essa ordem!', 'error');

      return;
    }

    const { token } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const ids: number[] = [];

    list.forEach(item => {
      ids.push(item.id);
    });

    const data = {
      ids,
    };

    const response = await api.post('/sort', data, config);

    if (response.status !== 200) {
      setSendDataLoading(false);
      notify('Ocorreu algum erro. Tente novamente!', 'error');

      return;
    }

    setSendDataLoading(false);
    setIsDataSended(true);
    notify('Alterações enviadas', 'success');

    setTimeout(async () => {
      setAddedEnterprises(null);
      setIsDataSended(false);
      await getData();
    }, 2000);
  };

  const handleClearAllList = (list: EmpreendimentoData[] | null) => {
    if (list) {
      setAddedEnterprises(null);
    }
  };

  const handleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  const notify = (text: string, className: string) =>
    toast(text, {
      position: 'top-right',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className,
    });

  const handleScrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

  const getData = async () => {
    setLoading(true);
    const { data } = await api.get('/show-all');

    if (data.length < 1) {
      setLoading(false);
      setEnterprises(null);
      return;
    }

    setEnterprises(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <BackToTop onClick={handleScrollToTop}>
        <AiOutlineArrowUp size={30} />
      </BackToTop>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {addedEnterprises && addedEnterprises.length > 0 && (
        <>
          <h1>Nova Lista:</h1>

          <CheckboxLabel className={checkbox ? 'checked' : 'unchecked'}>
            <RiArrowDropLeftLine size={35} />
            <input
              type="checkbox"
              defaultChecked={checkbox}
              onChange={handleCheckbox}
              value="TESTE TESTE"
            />
            Ver nova ordenação da lista:
          </CheckboxLabel>

          {checkbox && (
            <>
              <List className="old-list">
                {addedEnterprises.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <Enterprise>
                      <Image src={item.banner} alt={item.nome} />
                      <Details>
                        <Text>
                          <strong>Nome:</strong> {item.nome}
                        </Text>
                        <Text>
                          <strong>Descricao:</strong> {item.descricao}
                        </Text>
                        <Text>
                          <strong>Nova lista:</strong> {index + 1}º a ser exibido
                        </Text>
                      </Details>
                    </Enterprise>
                    <Button
                      type="button"
                      className="remove"
                      onClick={() => handleRemoveEnterprise(item.id, addedEnterprises)}
                    >
                      <FiDelete size={20} />
                      <span>Remover</span>
                    </Button>
                  </React.Fragment>
                ))}
              </List>
              {sendDataLoading ? (
                <LoadingIcon
                  use={ThreeDots}
                  size={120}
                  strokeWidth={6}
                  strokeColor="#0e6387"
                  duration={800}
                />
              ) : (
                <>
                  <Button
                    type="button"
                    className="send"
                    onClick={() => handleSendNewOrder(addedEnterprises)}
                  >
                    <CgPlayListRemove size={20} />
                    <span>Enviar alterações</span>
                  </Button>
                  <Button
                    type="button"
                    className="remove"
                    onClick={() => handleClearAllList(addedEnterprises)}
                  >
                    <CgPlayListRemove size={20} />
                    <span>Limpar toda a lista</span>
                  </Button>
                </>
              )}
            </>
          )}
        </>
      )}

      <List>
        {enterprises ? (
          <>
            {addedEnterprises && addedEnterprises.length > 0 ? (
              <h1>Lista Antiga</h1>
            ) : (
              <h1>Ordenar Obras</h1>
            )}

            {enterprises.map((item, index) => (
              <React.Fragment key={item.id}>
                <Enterprise>
                  <Image src={item.banner} alt={item.nome} />
                  <Details>
                    <Text>
                      <strong>Nome:</strong> {item.nome}
                    </Text>
                    <Text>
                      <strong>Descricao:</strong> {item.descricao}
                    </Text>
                    <Text>
                      <strong>Antiga lista:</strong> {index + 1}º a ser exibido
                    </Text>
                  </Details>
                </Enterprise>
                <Button
                  type="button"
                  onClick={() => handleAddEnterprise(item, addedEnterprises)}
                >
                  <MdAddBox size={20} />
                  <span>Adicionar</span>
                </Button>
              </React.Fragment>
            ))}
          </>
        ) : (
          <>
            {loading ? (
              <LoadingIcon
                use={ThreeDots}
                size={120}
                strokeWidth={6}
                strokeColor="#0e6387"
                duration={800}
              />
            ) : (
              <span>Ainda não existem obras cadastradas.</span>
            )}
          </>
        )}
      </List>
      <ToastContainer />
    </Container>
  );
};

export default OrdenarProjetos;
