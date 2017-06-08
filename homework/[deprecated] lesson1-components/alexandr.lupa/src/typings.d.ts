/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}


declare type User = {
  firstName: string;
  lastName?: string;
  dob: Date;
  sex: 'M' | 'F';
  address: string;
  email: string;
};