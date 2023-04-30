type TableProps = {
  children: React.ReactNode;
  className?: string;
};

export const Table = ({ children, className }: TableProps) => {
  return (
    <div
      className={`relative overflow-x-auto rounded-lg shadow-md ${
        className || ""
      }`}
    >
      <table className="w-full text-left text-sm text-gray-400">
        {children}
      </table>
    </div>
  );
};

export const TableHead = ({ children }: TableProps) => {
  return (
    <thead className="bg-gray-700 text-xs uppercase text-gray-400">
      <tr>{children}</tr>
    </thead>
  );
};

export const TableColumn = ({ children, className }: TableProps) => {
  return (
    <th scope="col" className={`px-6 py-3 ${className || ""}`}>
      {children}
    </th>
  );
};

export const TableBody = ({ children }: TableProps) => {
  return <tbody>{children}</tbody>;
};

export const TableRow = ({ children }: TableProps) => {
  return (
    <tr className="border-b border-gray-700 bg-gray-800 last:border-none hover:bg-gray-700">
      {children}
    </tr>
  );
};

export const TableData = ({ children, className }: TableProps) => {
  return <td className={`px-2 py-2 md:px-6 ${className || ""}`}>{children}</td>;
};
