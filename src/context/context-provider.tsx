import { createContext, useContext, useState } from 'react';

import { IncomeData } from '../utils/types';

const INITIAL_INCOME_DATA: IncomeData = {
  provinceId: 'ON',
  year: '2024',
  employmentIncome: 60000,
  selfEmploymentIncome: 0,
  otherIncome: 0,
  rrspContribution: 0,
  capitalGainsLosses: 0,
  eligibleDividends: 0,
};

type AppContextType = {
  incomeData: IncomeData;
  setIncomeData: (incomeData: IncomeData) => void;
  theme: string;
  setTheme: (theme: string) => void;
};

const MyContext = createContext<AppContextType | undefined>(undefined);

type AppContextProviderProps = {
  children: React.ReactNode;
};

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [incomeData, setIncomeData] = useState<IncomeData>(INITIAL_INCOME_DATA);
  const [theme, setTheme] = useState('dark');

  const value = { incomeData, setIncomeData, theme, setTheme };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
};