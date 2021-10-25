import { ListParams } from './../models/common';
import { student } from './../models/student';

import { ListResponse } from "../models";
import axiosClient from "./axiosClient"

const studentApi = {
    getAll(params: ListParams): Promise<ListResponse<student>>{
        const url='/students'
        return axiosClient.get(url, {params});
    },
    add(data: student): Promise<student>{
        const url='/students'
        return axiosClient.post(url,data);
    },
    update(data: student): Promise<student>{
        const url='/students'
        return axiosClient.patch(url,data);
    },
    remove(id: string): Promise<any>{
        const url=`/students/${id}`
        return axiosClient.delete(url);
    },
    getById(id: string): Promise<student>{
        const url=`/students/${id}`
        return axiosClient.get(url);
    }
}
export default studentApi