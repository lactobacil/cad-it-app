import moment from "moment";

export const getDaysInMonth = (month: string, year: number) => {  
    return moment(month + 1, 'MM').daysInMonth();  
  }

export const getFirstDayInMonth = (month: string, year: number) => {  
    return new Date(year, Number(month), 1).getDay()  
}


