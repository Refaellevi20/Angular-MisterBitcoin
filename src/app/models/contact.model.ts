export class Contact {
  public _id?: string = '';
  constructor(
    public name: string = '',
    public email: string = '',
    public phone: string = '',
    public gender?: string, 
    public imgIdx?: number
  ) {}

  setId?(id: string = 't101') {
    // Implement your own set Id
    // date.now() for id s
    this._id = id;
  }
}
export interface ContactFilter {
  term: string;
}
