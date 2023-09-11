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
  DialogClose,
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
import { Input } from "./components/ui/input";

const App: React.FC = () => {
  const [menuName, setMenuName] = useState("");
  const [menuPath, setMenuPath] = useState("");
  const history = useMemo(() => {
    //@ts-ignore
    const history = window.dvaApp._history;
    return history as { push: (path: string) => void };
  }, []);

  const [routes, setRoute] = useState<Route[]>(() => {
    const routes = JSON.parse(window.localStorage.getItem("routes") || "[]");
    if (routes.length == 0) {
      return defaultRoutes;
    }
    return routes;
  });

  return (
    <div className="flex whitespace-nowrap">
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
                <TableHead className="text-right">操作</TableHead>
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
                        routes[index].isShow = isChecked;
                        setRoute([...routes]);
                      }}
                    />
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="destructive"
                      onClick={() => {
                        routes.splice(index, 1);
                        setRoute(routes.slice());
                      }}
                    >
                      删除
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex gap-[10px]">
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
                  <DialogTitle>新增菜单项</DialogTitle>
                  <DialogDescription>
                    添加路由菜单时，无需附带网站 host，只填写路径即可
                  </DialogDescription>
                </DialogHeader>
                <Input
                  value={menuName}
                  onChange={(e) => setMenuName(e.target.value)}
                  type="text"
                  placeholder="菜单名称"
                />
                <Input
                  value={menuPath}
                  onChange={(e) => setMenuPath(e.target.value)}
                  type="text"
                  placeholder="菜单路由"
                />
                <DialogFooter>
                  <DialogClose asChild>
                    <Button
                      type="submit"
                      onClick={() => {
                        routes.push({
                          name: menuName,
                          path: menuPath,
                          isShow: true,
                        });
                        setRoute(routes.slice());
                      }}
                    >
                      确认
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button
              onClick={() => {
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
