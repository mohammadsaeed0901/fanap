import ServerTable from "./components/ServerTable";

interface Data {
    name: string;
    category: string;
    compatible: number;
    number: number;
    version: number;
}

const originalRows: Data[] = [
    {name:"Apache web server", category:"web server", compatible:10, number:4, version:16.0},
    {name:"Apache Tomcat", category:"web server", compatible:8.1, number:6, version:8.05},
    {name:"Nginx", category:"web server", compatible:8, number:12, version:14.46},
    {name:"Oracle Web Tier", category:"web server", compatible:10, number:3, version:21},
    {name:"Abyss web server", category:"web server", compatible:11, number:8, version:22},
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

const Servers = () => {
    return <ServerTable originalRows={originalRows} serverFilter={serverFilters}/>;
};

export default Servers;
