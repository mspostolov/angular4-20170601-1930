declare namespace Dayoff{
    interface Employee{
        name: string;
        photo: string;
        profession: string;
        bio: string;
        direction: string;
        email: string;
        phone: string;
    }

    interface User {
        id?: number,
        firstName: string,
        surname: string,
        photo?: string,
        country: string
    }
}

declare namespace Converter{
    interface CurrencyDefinition{
        name: string,
        value: number
    }
    interface WebServiceResponse{
        base: string,
        date: string,
        rates: any
    }
}