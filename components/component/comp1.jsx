/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/LktODklQZdQ
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Gabarito } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

gabarito({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Comp1() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-4 md:py-6">
        <div className="container px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                  <span className="sr-only">Toggle user menu</span>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>My Account</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="#" className="text-lg font-medium" prefetch={false}>
              Acme Rentals
            </Link>
          </div>
          <nav className="hidden md:flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}>
              Home
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}>
              Vehicles
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}>
              Offers
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}>
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Find your perfect ride</h1>
              <p className="text-lg md:text-xl">
                Rent the car you need, when you need it. Our wide selection and easy booking process make it simple.
              </p>
              <form className="flex gap-4">
                <input
                  type="text"
                  placeholder="Search by location or vehicle"
                  className="flex-1" />
                <Button type="submit" className="whitespace-nowrap">
                  Search
                </Button>
              </form>
            </div>
            <img
              src="/placeholder.svg"
              width={600}
              height={400}
              alt="Hero"
              className="mx-auto rounded-xl" />
          </div>
        </div>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="space-y-6 md:space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Explore our fleet</h2>
                <p className="text-muted-foreground md:text-lg">
                  Choose from a wide range of vehicles to fit your needs.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                    <img
                      src="/placeholder.svg"
                      width={200}
                      height={150}
                      alt="Sedan"
                      className="rounded-lg" />
                    <div className="text-center">
                      <h3 className="text-xl font-semibold">Sedans</h3>
                      <p className="text-muted-foreground">Comfortable and efficient.</p>
                    </div>
                    <Button variant="outline">Rent Now</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                    <img
                      src="/placeholder.svg"
                      width={200}
                      height={150}
                      alt="SUV"
                      className="rounded-lg" />
                    <div className="text-center">
                      <h3 className="text-xl font-semibold">SUVs</h3>
                      <p className="text-muted-foreground">Spacious and versatile.</p>
                    </div>
                    <Button variant="outline">Rent Now</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                    <img
                      src="/placeholder.svg"
                      width={200}
                      height={150}
                      alt="Luxury"
                      className="rounded-lg" />
                    <div className="text-center">
                      <h3 className="text-xl font-semibold">Luxury</h3>
                      <p className="text-muted-foreground">Indulge in style and comfort.</p>
                    </div>
                    <Button variant="outline">Rent Now</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                    <img
                      src="/placeholder.svg"
                      width={200}
                      height={150}
                      alt="Vans"
                      className="rounded-lg" />
                    <div className="text-center">
                      <h3 className="text-xl font-semibold">Vans</h3>
                      <p className="text-muted-foreground">Spacious and practical.</p>
                    </div>
                    <Button variant="outline">Rent Now</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="space-y-6 md:space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What our customers say</h2>
                <p className="text-muted-foreground md:text-lg">Hear from real people who have rented with us.</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="border w-12 h-12">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <div className="font-semibold">John Doe</div>
                        <div className="flex items-center gap-1 text-xs font-medium">
                          <StarIcon className="w-4 h-4 fill-primary" />
                          <StarIcon className="w-4 h-4 fill-primary" />
                          <StarIcon className="w-4 h-4 fill-primary" />
                          <StarIcon className="w-4 h-4 fill-primary" />
                          <StarIcon className="w-4 h-4 fill-primary" />
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      "I had a great experience renting with this company. The\n process was smooth and the car was in
                      excellent\n condition."
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="border w-12 h-12">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>SM</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <div className="font-semibold">Sarah Miller</div>
                        <div className="flex items-center gap-1 text-xs font-medium">
                          <StarIcon className="w-4 h-4 fill-primary" />
                          <StarIcon className="w-4 h-4 fill-primary" />
                          <StarIcon className="w-4 h-4 fill-primary" />
                          <StarIcon className="w-4 h-4 fill-primary" />
                          <StarIcon className="w-4 h-4 fill-primary" />
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      "I was impressed by the wide selection of vehicles and\n the competitive prices. I'll definitely
                      be renting from\n them again."
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="border w-12 h-12">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>MJ</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <div className="font-semibold">Michael Johnson</div>
                        <div className="flex items-center gap-1 text-xs font-medium">
                          <StarIcon className="w-4 h-4 fill-primary" />
                          <StarIcon className="w-4 h-4 fill-primary" />
                          <StarIcon className="w-4 h-4 fill-primary" />
                          <StarIcon className="w-4 h-4 fill-primary" />
                          <StarIcon className="w-4 h-4 fill-primary" />
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      "The rental process was quick and easy, and the staff\n was very helpful. I would definitely
                      recommend this\n company to anyone looking to rent a car."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="space-y-6 md:space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Special Offers</h2>
                <p className="text-muted-foreground md:text-lg">Check out our latest deals and discounts.</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                    <img
                      src="/placeholder.svg"
                      width={200}
                      height={150}
                      alt="Offer 1"
                      className="rounded-lg" />
                    <div className="text-center">
                      <h3 className="text-xl font-semibold">Weekend Getaway</h3>
                      <p className="text-muted-foreground">20% off on all weekend rentals.</p>
                    </div>
                    <Button variant="outline">Learn More</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                    <img
                      src="/placeholder.svg"
                      width={200}
                      height={150}
                      alt="Offer 2"
                      className="rounded-lg" />
                    <div className="text-center">
                      <h3 className="text-xl font-semibold">Long-Term Rental</h3>
                      <p className="text-muted-foreground">15% off on rentals of 7 days or more.</p>
                    </div>
                    <Button variant="outline">Learn More</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                    <img
                      src="/placeholder.svg"
                      width={200}
                      height={150}
                      alt="Offer 3"
                      className="rounded-lg" />
                    <div className="text-center">
                      <h3 className="text-xl font-semibold">Corporate Discounts</h3>
                      <p className="text-muted-foreground">Special rates for business travelers.</p>
                    </div>
                    <Button variant="outline">Learn More</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                    <img
                      src="/placeholder.svg"
                      width={200}
                      height={150}
                      alt="Offer 4"
                      className="rounded-lg" />
                    <div className="text-center">
                      <h3 className="text-xl font-semibold">Referral Program</h3>
                      <p className="text-muted-foreground">Earn credits for every friend you refer.</p>
                    </div>
                    <Button variant="outline">Learn More</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="space-y-6 md:space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">How it works</h2>
                <p className="text-muted-foreground md:text-lg">Our simple and straightforward rental process.</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                <div
                  className="flex flex-col items-center gap-4 p-6 rounded-lg bg-background shadow-sm">
                  <SearchIcon className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-semibold">Search</h3>
                  <p className="text-muted-foreground">
                    Browse our selection of vehicles and find the perfect one for your needs.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>)
  );
}

function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function StarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
