import User from "../entities/User";
import ApiClient from "../services/api-client";
import { toMs } from "ms-typescript";
import { useQuery } from "@tanstack/react-query";

export default () => {
    const apiClient = new ApiClient<User>(`/users/me`);
    return useQuery<User, Error>({
      queryKey: ["user"],
      queryFn: () => apiClient.getSingle(),
      staleTime: toMs("10s")
    })}
