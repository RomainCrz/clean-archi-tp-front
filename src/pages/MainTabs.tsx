import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomerTab } from "./customer/CustomerTab";
import { ProductTab } from "./product/ProductTab";

export function MainTabs() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Customers</TabsTrigger>
        <TabsTrigger value="password">Products</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardContent className="space-y-2">
            <CustomerTab />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardContent className="space-y-2">
            <ProductTab />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
