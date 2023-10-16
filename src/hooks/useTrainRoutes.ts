import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client";
import { toMs } from "ms-typescript"
import TrainRoute from "../entities/TrainRoute";



const useTrainRoutes = () => {
    const apiClient = new ApiClient<TrainRoute>("/trainRoutes");
  return useQuery<FetchResponse<TrainRoute>, Error>({
    queryKey: ["trainRoutes"],
    queryFn: () => apiClient.getAll(),
    staleTime: toMs("30s")
})}

export default useTrainRoutes;