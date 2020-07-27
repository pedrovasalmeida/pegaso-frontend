import useSWR from 'swr';
import api from '../services/api';

const fetcher = async (url: string) =>
  await api
    .get(url)
    .then((res) => res.data)
    .catch((err) => err);

export default function UseAxios(url: string) {
  const { data, error } = useSWR(url, fetcher);

  return {
    results: data,
    isLoading: !error && !data,
    isError: error,
  };
}
