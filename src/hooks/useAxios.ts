import useSWR from "swr";
import api from "../services/api";

export default function useAxios<Data = any>(url: string) {
  const fetcher = async (url: string) =>
    await api.get(url).then((res) => res.data);

  const { data, error } = useSWR<Data>(url, fetcher);

  return { data, error };
}
