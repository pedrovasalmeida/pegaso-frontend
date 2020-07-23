import useSWR from 'swr';
import api from '../services/api';

const fetcher = async (url: string) =>
  await api.get(url).then((res) => res.data);

export default function UseAxios<Data = any>(url: string) {
  const { data, error } = useSWR<Data>(url, fetcher);

  return { data, error };
}
