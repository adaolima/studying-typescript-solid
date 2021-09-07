import { promises } from "fs";
const { readFile } = promises;
import MessageData from "./MessageData";

export default class MessageDataFile implements MessageData {
  async read(lang: string): Promise<string> {
    return await readFile(`./src/messages/${lang}.txt`, 'utf-8');
  }

}