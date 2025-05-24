import Link from "next/link";
import { routes } from "../lib/routes";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Home() {
  return (
    <div>
      <Table className="w-100">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Pages</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {routes.map((route) => (
            <TableRowItem key={route.path}>
              <Link href={route.path}>{route.label}</Link>
            </TableRowItem>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function TableRowItem({ children }: { children: React.ReactNode }) {
  return (
    <TableRow>
      <TableCell>{children}</TableCell>
    </TableRow>
  );
}
