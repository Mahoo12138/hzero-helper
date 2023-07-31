import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch"
import { _import } from "./utils/modules";
import "./index.css";
import defaultRoutes from "./config.json";

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef();
  const [open, setOpen] = useState(false);
  const history = useMemo(() => {
    //@ts-ignore
    const history = window.dvaApp._history;
    return history as { push: (path: string) => void };
  }, []);

  // const [routes, setRoutes] = useGMStore<Route[]>("routes", defaultRoutes);
  const routes = defaultRoutes;

  return (
    <div className="flex">
      {routes.map((r) => (
        <div
          onClick={() => history.push(r.path)}
          className="text-[#ccc] text-md px-[10px] rounded-[5px] hover:bg-[hsla(0,0%,100%,.1)]"
        >
          <span className="p-10px">{r.name}</span>
        </div>
      ))}
      <Sheet>
        <SheetTrigger>
          <div className="text-[#ccc] text-md px-[10px] rounded-[5px] hover:bg-[hsla(0,0%,100%,.1)]">
            <span className="p-10px">设置</span>
          </div>
        </SheetTrigger>
        <SheetContent className="p-[20px]">
          <SheetHeader>
            <SheetTitle className="text-xxl">Hzero Helper 设置</SheetTitle>
            <SheetDescription className="!mt-[16px]">
              在此你可以对该脚本部分设置进行自定义
            </SheetDescription>
          </SheetHeader>
          <Table className='mt-[20px]'>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[60px]">序号</TableHead>
                <TableHead>菜单名称</TableHead>
                <TableHead>菜单路径</TableHead>
                <TableHead className="text-right">是否显示</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {routes.map((route, index) => (
                <TableRow key={route.name}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{route.name}</TableCell>
                  <TableCell>{route.path}</TableCell>
                  <TableCell className="text-right">
                    <Switch checked={route.isShow}/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default App;
