export enum tipoTrabajoEnum{
  freelancer,
  contrato
}
export class Email {
  constructor(

    public id:number,
    public nombre:string,
    public correoelectronico:string,
    public tipoTrabajoEnum:string,
    public mensaje:string,
    public isOk:boolean,
  public telefono?:string
    
  ){}

}
