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
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { _import } from "./utils/modules";
import "./index.css";
import defaultRoutes from "./config.json";

const App: React.FC = () => {
  const history = useMemo(() => {
    //@ts-ignore
    const history = window.dvaApp._history;
    return history as { push: (path: string) => void };
  }, []);

  const [routes, setRoute] = useState(() => {
    const activeRoutes = JSON.parse(
      window.localStorage.getItem("activeRoutes") || "[]"
    );
    const inactiveRoutes = JSON.parse(
      window.localStorage.getItem("inactiveRoutes") || "[]"
    );
    const routes = [...activeRoutes, ...inactiveRoutes];
    if (routes.length == 0) {
      return defaultRoutes;
    }
    return routes;
  });

  return (
    <div className="flex">
      {routes
        .filter((r1) => r1.isShow)
        .map((r2) => (
          <div
            onClick={() => history.push(r2.path)}
            className="text-[#ccc] text-md px-[10px] rounded-[5px] hover:bg-[hsla(0,0%,100%,.1)]"
          >
            <span className="p-10px">{r2.name}</span>
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
          <Table className="mt-[20px]">
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
                    <Switch
                      checked={route.isShow}
                      onCheckedChange={(isChecked) => {
                        console.log("onCheckedChange", isChecked);
                        routes[index].isShow = isChecked;
                        setRoute([...routes]);
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex">
            <Dialog>
              {/* <ContextMenu>
                <ContextMenuTrigger>Right click</ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>Open</ContextMenuItem>
                  <ContextMenuItem>Download</ContextMenuItem>
                  <DialogTrigger asChild>
                    <ContextMenuItem>
                      <span>Delete</span>
                    </ContextMenuItem>
                  </DialogTrigger>
                </ContextMenuContent>
              </ContextMenu> */}
              <DialogTrigger>
                <Button>新增</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. Are you sure you want to
                    permanently delete this file from our servers?
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button type="submit">Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button
              onClick={() => {
                console.log("first");
                window.localStorage.setItem("routes", JSON.stringify(routes));
              }}
            >
              保存
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default App;
