/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/hqTraJ6vt1C
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export function Promotions() {
  return (
    (<div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="bg-primary rounded-lg overflow-hidden mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="p-6 md:p-10 space-y-4">
            <h2 className="text-3xl font-bold text-primary-foreground">Exclusive Offer: 25% Off Weekend Rentals</h2>
            <p className="text-primary-foreground">
              Book your weekend getaway and save big with our latest member promotion.
            </p>
            <div className="flex items-center gap-4">
              <Button size="lg" variant="secondary">
                Redeem Offer
              </Button>
              <Link
                href="#"
                className="text-primary-foreground underline underline-offset-4 hover:text-primary-foreground/80"
                prefetch={false}>
                Learn More
              </Link>
            </div>
          </div>
          <img
            src="/placeholder.svg"
            alt="Featured Promotion"
            width={600}
            height={400}
            className="object-cover aspect-[3/2]" />
        </div>
      </div>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Current Promotions</h3>
          <div className="flex items-center gap-4">
            <Label htmlFor="filter">Filter by:</Label>
            <Select id="filter" defaultValue="all">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Promotions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Promotions</SelectItem>
                <SelectItem value="discount">Discount Offers</SelectItem>
                <SelectItem value="upgrade">Upgrade Offers</SelectItem>
                <SelectItem value="free">Free Rental Offers</SelectItem>
              </SelectContent>
            </Select>
            <Select id="sort" defaultValue="newest">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Newest First" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="expiring">Expiring Soon</SelectItem>
                <SelectItem value="discount">Highest Discount</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <img
              src="/placeholder.svg"
              alt="Promotion Image"
              width={400}
              height={240}
              className="object-cover aspect-[4/3] rounded-t-lg" />
            <CardContent className="p-6 space-y-4">
              <div>
                <h4 className="text-xl font-bold">25% Off Weekly Rentals</h4>
                <p className="text-muted-foreground">Rent a car for a week and save big.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Valid until July 31, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <CarIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Eligible for all vehicle types</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                *Terms and conditions apply. See details for more information.
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              src="/placeholder.svg"
              alt="Promotion Image"
              width={400}
              height={240}
              className="object-cover aspect-[4/3] rounded-t-lg" />
            <CardContent className="p-6 space-y-4">
              <div>
                <h4 className="text-xl font-bold">Free Upgrade to Premium Vehicle</h4>
                <p className="text-muted-foreground">Treat yourself to a luxurious ride.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Valid until August 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <CarIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Eligible for compact and midsize vehicles</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                *Terms and conditions apply. See details for more information.
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              src="/placeholder.svg"
              alt="Promotion Image"
              width={400}
              height={240}
              className="object-cover aspect-[4/3] rounded-t-lg" />
            <CardContent className="p-6 space-y-4">
              <div>
                <h4 className="text-xl font-bold">50% Off Airport Rentals</h4>
                <p className="text-muted-foreground">Save big on your next airport pickup.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Valid until September 30, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <CarIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Eligible for all vehicle types</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                *Terms and conditions apply. See details for more information.
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              src="/placeholder.svg"
              alt="Promotion Image"
              width={400}
              height={240}
              className="object-cover aspect-[4/3] rounded-t-lg" />
            <CardContent className="p-6 space-y-4">
              <div>
                <h4 className="text-xl font-bold">Free Weekend Rental</h4>
                <p className="text-muted-foreground">Enjoy a free weekend getaway on us.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Valid until October 31, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <CarIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Eligible for economy and compact vehicles</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                *Terms and conditions apply. See details for more information.
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              src="/placeholder.svg"
              alt="Promotion Image"
              width={400}
              height={240}
              className="object-cover aspect-[4/3] rounded-t-lg" />
            <CardContent className="p-6 space-y-4">
              <div>
                <h4 className="text-xl font-bold">30% Off Monthly Rentals</h4>
                <p className="text-muted-foreground">Save big on your long-term rental.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Valid until November 30, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <CarIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Eligible for all vehicle types</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                *Terms and conditions apply. See details for more information.
              </div>
            </CardContent>
          </Card>
          <Card>
            <img
              src="/placeholder.svg"
              alt="Promotion Image"
              width={400}
              height={240}
              className="object-cover aspect-[4/3] rounded-t-lg" />
            <CardContent className="p-6 space-y-4">
              <div>
                <h4 className="text-xl font-bold">Free One-Way Rental</h4>
                <p className="text-muted-foreground">Enjoy the freedom of a one-way rental.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Valid until December 31, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <CarIcon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Eligible for midsize and SUV vehicles</span>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                *Terms and conditions apply. See details for more information.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>)
  );
}

function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}


function CarIcon(props) {
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
      <path
        d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
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
