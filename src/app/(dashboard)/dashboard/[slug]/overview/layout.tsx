interface Props {
  total_revenue: React.ReactNode;
  total_sales: React.ReactNode;
  customers: React.ReactNode;
  customer_reviews: React.ReactNode;
  sales_by_location: React.ReactNode;
}

export default function Layout({
  total_revenue,
  total_sales,
  customers,
  customer_reviews,
  sales_by_location,
}: Props) {
  return (
    <main className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {total_revenue}
        {total_sales}
        {customers}
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">{customer_reviews}</div>
        {sales_by_location}
      </div>
    </main>
  );
}
