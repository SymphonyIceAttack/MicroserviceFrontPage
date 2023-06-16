import { AxiosResponse } from 'axios'
export default <T extends Record<string, any> = {}>(
    response: AxiosResponse
): T & { code: number; successful: boolean } => {
    return response.data
}
