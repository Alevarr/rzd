import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { toMs } from "ms-typescript"
import TrainRoute from "../entities/TrainRoute";



const useTrainRoute = (id : string) => {
    const apiClient = new ApiClient<TrainRoute>(`/trainRoutes/${id}`);
  return useQuery<TrainRoute, Error>({
    queryKey: ["trainRoute", id],
    queryFn: () => apiClient.getSingle(),
    staleTime: toMs("30s")
})}

export default useTrainRoute;