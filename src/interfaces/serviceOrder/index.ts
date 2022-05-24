export type StatusType = "Aberto" | "Fechado";

export interface IServiceOrder {
  userId: string;
  serviceTypeId: string;
  unitId: string;
  status: StatusType;
  reschedule: string;
}

export interface IService {
  id: string;
  userId?: string;
  serviceId?: string;
  clientId?: string;
  status: StatusType;
  reschedule?: string;
}

export interface IServiceUpdate {
  id: string;
  status?: StatusType;
  reschedule?: string;
}