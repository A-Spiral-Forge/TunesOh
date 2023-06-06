import React, {createContext, useContext, useState} from 'react';

type PageHandlerContextType = {
    page: string;
    setPage: (page: string) => void;
}

const PageHandlerContext = createContext<PageHandlerContextType>({
    page: 'Home',
    setPage: () => {},
});

const usePageHandler = () => {
    const context = useContext(PageHandlerContext);
    if (!context) {
        throw new Error('usePageHandler must be used within a PageHandlerProvider');
    }
    return context;
}

const PageHandlerProvider = ({children} : {children: React.ReactNode}) => {
    const [page, setPage] = useState('Home');

    return (
        <PageHandlerContext.Provider value={{page, setPage}}>
            {children}
        </PageHandlerContext.Provider>
    );
}

export {usePageHandler, PageHandlerProvider};