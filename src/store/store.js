import { defineStore } from 'pinia';

export const useChatStore = defineStore('chatStore', {
    state: () => ({ 
        comments: [
          { id: 1, senderId: 1, type: "file", fileName: "2.pdf", version: 1, size: "3.8MB", fileType: "Documento / PDF", date: "28 dic 2018 / 14:45" }, 
          { id: 2, senderId: 1, type: "text", message: "Buenas tardes, acabo de subir el primer archivo con el caso práctico, espero revisión.", date: "28 dic 2018 / 14:45" },
          { id: 3, senderId: 2, type: "text", message: "¡Gran trabajo Silvia! Pero creo que deberías revisar el punto 3. Intenta añadir un poco más de contexto y un apartado final de conclusiones personales.", date: "29 dic 2018 / 10:11" },
          { id: 4, senderId: 1, type: "file", fileName: "2.pdf", version: 2, size: "4.8MB", fileType: "Documento / PDF", date: "30 dic 2018 / 08:22" }, 
          { id: 5, senderId: 1, type: "text", message: "Realizados los cambios según el feedback.", date: "30 dic 2018 / 08:22" },
          { id: 6, senderId: 2, type: "text", message: "Perfecto, excelente trabajo.", date: "30 dic 2018 / 15:25" },
        ] 
    }),
    actions: {
      addMessage(message) {
        const commentsLength = this.comments.length;
        const id = this.comments.length > 0 ? this.comments.length + 1 : 1;
        const now = new Date();
        let month;
        switch(now.getMonth()){
          case 0:
            month = "ene";
            break;
          case 1:
            month = "feb";
            break;  
          case 2:
            month = "mar";
            break;
          case 3:
            month = "abr";
            break;
          case 4:
            month = "may";
            break;
          case 5:
            month = "jun";
            break;
          case 6:
            month = "jul";
            break;
          case 7:
            month = "ago";
            break;
          case 8:
            month = "sep";
            break;
          case 9:
            month = "oct";
            break;  
          case 10:
            month = "nov";
            break;  
          default:
            month = "dic";
            break; 
          }

          let hours = now.getHours().toString();
          if(hours.length === 1){
            hours = `0${hours}`;
          }

          
          let minutes = now.getMinutes().toString();
          if(minutes.length === 1){
            minutes = `0${minutes}`;
          }
        const dateString = `${now.getDate()} ${month} ${now.getFullYear()} / ${hours}:${minutes}`;
        this.comments.push({id: id, senderId: 1, type: "text", message: message, date: dateString })
      },
    },
  })