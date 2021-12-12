import ServerTable from "./components/ServerTable";

function createData(name:string, category:string, compatible:number, number:number, version:number) {
  return { name, category, compatible, number, version };
}

const rows = [
  createData("Apache web server", "web server", 10, 4, 16.0),
  createData("Apache Tomcat", "web server", 8.1, 6, 8.05),
  createData("Nginx", "web server", 8, 12, 14.46),
  createData("Oracle Web Tier", "web server", 10, 3, 21),
  createData("Abyss web server", "web server", 11, 8, 22),
];

const serverFilters = [
    "Web servers",
    "File servers",
    "Application servers",
    "Database servers",
    "Virtual servers",
    "Proxy servers",
    "Print servers",
  ];

const Index = () => {
    return <ServerTable rows={rows} serverFilter={serverFilters}/>;
};

export default Index;
