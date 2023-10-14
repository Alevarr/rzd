import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client";
import { toMs } from "ms-typescript"
import Case from "../entities/Case";
import useCaseQueryStore from "../store";


const apiClient = new ApiClient<Case>("/cases");

const useCases = () => {
  const caseQuery = useCaseQueryStore(s => s.caseQuery);
  return useQuery<FetchResponse<Case>, Error>({
    queryKey: ["cases", {...caseQuery, category: caseQuery.category, budgerRange: caseQuery.budgetRange, status: caseQuery.status}],
    queryFn: () => apiClient.getAll({params: 
      {
        category: caseQuery.category?.slug,
        // budgetRange: caseQuery.budgetRange,
        // status: caseQuery.status
      }
    }),
    staleTime: toMs("24h")
})}

export default useCases;