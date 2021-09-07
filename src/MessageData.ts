export default interface MessageData {
  read(lang:string): Promise<string>;
}