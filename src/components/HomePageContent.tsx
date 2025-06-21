import React from 'react'

export function HomePageContent() {
  return (
    <div className="container mx-auto mt-16 px-4">
      <div className="space-y-12">
        <section>
          <h2 className="mb-3 text-3xl font-bold tracking-tight">
            A Measurement Converter That Simply Works
          </h2>
          <p className="text-muted-foreground max-w-4xl text-lg">
            Tired of wrestling with confusing numbers and formulas? Whether
            you&apos;re a chef perfecting a recipe, a student tackling a science
            project, or a traveler figuring out distances, UnitConvertor.co is
            your go-to solution. We&apos;ve created a simple, fast, and
            completely free online tool that delivers instant, accurate
            conversions without the headache.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Get Your Answer in Three Simple Steps
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="bg-card text-card-foreground rounded-lg border p-6">
              <div className="bg-primary text-primary-foreground mb-3 flex h-12 w-12 items-center justify-center rounded-full">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="mb-1 text-lg font-semibold">Choose Your Tool</h3>
              <p className="text-muted-foreground text-sm">
                Select the type of conversion you need from our extensive list.
              </p>
            </div>
            <div className="bg-card text-card-foreground rounded-lg border p-6">
              <div className="bg-primary text-primary-foreground mb-3 flex h-12 w-12 items-center justify-center rounded-full">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="mb-1 text-lg font-semibold">Enter Your Value</h3>
              <p className="text-muted-foreground text-sm">
                Type the number you want to convert into the input field.
              </p>
            </div>
            <div className="bg-card text-card-foreground rounded-lg border p-6">
              <div className="bg-primary text-primary-foreground mb-3 flex h-12 w-12 items-center justify-center rounded-full">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="mb-1 text-lg font-semibold">Select Your Units</h3>
              <p className="text-muted-foreground text-sm">
                Pick your &quot;from&quot; and &quot;to&quot; units and see the
                magic happen.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Why People Love UnitConvertor.co
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="text-muted-foreground space-y-4">
              <p>
                We built UnitConvertor.co with a single mission: to create the
                most intuitive and reliable unit converter on the web. We got
                tired of clunky, ad-filled sites that were slow and hard to use.
                Our platform is clean, lightning-fast, and built on a foundation
                of precision.
              </p>
              <p>
                Every calculation is performed with rigorously tested,
                standardized formulas, so you can trust our results for
                everything from school homework to professional projects. Best
                of all, it&apos;s completely free and works beautifully on any
                device.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <p className="font-semibold">
                  &quot;This site is a lifesaver! So quick and easy for my
                  cooking measurements.&quot;
                </p>
                <p className="text-muted-foreground text-right text-sm">
                  – Priya S.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <p className="font-semibold">
                  &quot;Finally, a unit converter that just works. No fuss, just
                  perfect results every time.&quot;
                </p>
                <p className="text-muted-foreground text-right text-sm">
                  – Mark L.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            What Makes Us Different?
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-card text-card-foreground rounded-lg border p-6">
              <h3 className="mb-2 text-lg font-semibold">Instant Results</h3>
              <p className="text-muted-foreground text-sm">
                No more hitting an &quot;enter&quot; button. Your conversions
                appear in real-time as you type, making the process faster than
                ever.
              </p>
            </div>
            <div className="bg-card text-card-foreground rounded-lg border p-6">
              <h3 className="mb-2 text-lg font-semibold">Intuitive Design</h3>
              <p className="text-muted-foreground text-sm">
                Our clean, ad-free interface is designed for humans. No
                distractions, no clutter—just a simple tool that&apos;s a
                pleasure to use.
              </p>
            </div>
            <div className="bg-card text-card-foreground rounded-lg border p-6">
              <h3 className="mb-2 text-lg font-semibold">
                Effortless Copy-Pasting
              </h3>
              <p className="text-muted-foreground text-sm">
                With dedicated copy buttons for each value and the entire
                result, grabbing your numbers is a one-click affair.
              </p>
            </div>
            <div className="bg-card text-card-foreground rounded-lg border p-6">
              <h3 className="mb-2 text-lg font-semibold">Open & Transparent</h3>
              <p className="text-muted-foreground text-sm">
                We believe in transparency. UnitConvertor.co is open-source, and
                you can view the code on GitHub.
              </p>
            </div>
            <div className="bg-card text-card-foreground rounded-lg border p-6">
              <h3 className="mb-2 text-lg font-semibold">
                User-Centric Development
              </h3>
              <p className="text-muted-foreground text-sm">
                This tool was built based on deep research into what users
                actually need from a converter. Your workflow is our priority.
              </p>
            </div>
            <div className="bg-card text-card-foreground rounded-lg border p-6">
              <h3 className="mb-2 text-lg font-semibold">Evolving with You</h3>
              <p className="text-muted-foreground text-sm">
                Have an idea for a new feature? We&apos;re constantly updating
                the site based on user feedback to make your conversions even
                easier.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-semibold">Is UnitConvertor.co really free?</p>
              <p className="text-muted-foreground">
                Absolutely. Our mission is to provide a powerful, accessible
                tool for everyone. All our converters are 100% free to use, with
                no hidden fees or subscriptions.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-semibold">How accurate are the conversions?</p>
              <p className="text-muted-foreground">
                Extremely. We use official, standardized conversion factors to
                ensure our results are precise and trustworthy for any
                application, from scientific calculations to everyday tasks.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-semibold">Do I need to install anything?</p>
              <p className="text-muted-foreground">
                No. UnitConvertor.co works directly in your browser on any
                device. There&apos;s nothing to download or install, so you can
                get converting right away.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
