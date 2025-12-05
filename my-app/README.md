How to Install and Run the Project
I used Next.js, and typing 'npm run dev' in the terminal will start the local site and provide quick links to open the project in your browser. I used VSCode Studio to build the app and run any commands. I could run 'npm build' to make the site production-ready, hiding all client-side code, but I didn't have time to test that the build works correctly. Next.js likes to be as clean as possible and flags up any minor problems, preventing the build command from running.


CSS
I would've preferred to set up SASS styles to declutter the globals.css file, but I ended up creating new hyphenated classes and applying them to the different elements. Using SASS to computerise the other reused and commonly used styles would've been far more scalable and further condensed the required classes. If given more time, I would use Bootstrap-React and SASS to be more efficient.

Components
There are a couple of cases where creating separate, reusable components for the different elements would've been beneficial. However, given the time constraints to return a completed static page from the Figma designs, I decided to go ahead with the solution I completed in this repo. As well, when looking across the different pages/navigation options, there wasn't a massive amount of components that I could've reused, such as the various banners, which are quite complex across the other pages and at least in this task, weren't something I wanted to spend time on doing, considering only the Home Page was requested.

There are also several what I assume may be "active" styled components, such as the buttons in the "Our Markets" section, with "Most Traded" indicating the currently active screen and the graph that would retrieve data and other related components (such as the different currencies or commodities, etc) and this would likely be it's own graph component that would render and retrieve data based on the selected option. E.g., selecting "Shares" would change the CSS to make that button red, load a different set of data, and populate the graph accordingly. In this instance, I did not generate the graph myself; I downloaded the SVG from Figma.

Vectors and Icons
I downloaded the various icons from the Figma design instead of using a library such as Material Icons from Google, this was because given the scope of this project, I didn't want to locate the individual icons from Material Icons and import them, since in a real production environment you'd likely use a large proportion of the library across the site, meaning the implementation of specific icons would be far simpler and justify setting up the import for the icons.

As well, icons would be named better and sorted into their own folders, e.g for icons and images.

Device Sizes
It is paramount in our current world of technology and website design that all sites are optimised for use on mobile and handheld devices, not just on a fixed-width, fixed-height desktop/monitor. Libraries such as Bootstrap are a great open-source way to ensure such compatibility. When building this static site, I made some adjustments to make it compatible with smaller devices; however, many elements, as they appear in Figma, are not mobile-friendly, such as the header and footer. I could take liberties in designing them myself, but, of course, in the real world, this requires conversing with design teams to coordinate and come up with a good alternative to display key information and navigation while still maintaining a cohesive, streamlined design aligned with the primary design goals. For example, the section in the header that includes the "Trading, Discover, Promotions, Company, Partner with us" could be condesned into a dropdown named "Menu" or something similar to indicate that the user should utilise this dropdown to navigate to other pages, which gives the header more room on a smaller decive width and not have wrapping or overflowing content.
Similar situation with the footer

Some elements also have fixed widths to contain all of the visual information included in the Figma design, such as images in the "Seamless Withdrawals" section, which could be condensed into the three interactable options on the left side ("Ultra-Fast Processing"...), allowing the critical content to be still visible when condensed.

Text
In a professional environment, I'd expect all text and descriptions to be stored in a constants file, so long description names won't clutter up the HTML and can be used when needed based on short-hand names. E.g "Our Markets" would be something like {label.Our_Markets} and description would be {label.Our_Markets_Description}.

What I Would've Done Differently
Used Bootstrap to ensure multi-device compatibility. There is a Bootstrap-React framework that seamlessly integrates the two and comes with default SASS selectors and configurations. Doing so would've minimised the time I spent trying to make problematic elements compatible across devices by converting fixed widths to percentages to make them responsive to the available space. I used this framework for my personal website portfolio, making it responsive and hassle-free.

The first section posed significant challenges, and I'm not too happy with how I implemented the designs. In the future, I would've worked on one section at a time rather than trying to build the entire app at once. I think it works "well enough" for the number of hours I put into it, but it is messy and could've been much cleaner.

The way I configured some elements prevents the app from being responsive to different screen sizes, and I am not proud of it. But given the short time frame to produce an entire web home page, I got the majority of the elements and typography as close as I could, and it does closely resemble the designs when viewed on a 1080p monitor. The components I have identified as the culprits are the "CurrencyButtons" component and the other banner containers with images.

Conclusion
Some sections are completed to a higher standard than others and follow the Figma designs and spacing more accurately, simply because I spent more time on them initially. I studied the designs more closely to match the assumed gaps, margins, and paddings closely. In many cases, I assumed gaps and margins based on how they compared to the Figma designs, where exact measurements were not provided. So some sections are not as high as they are in Figma, because the heights in my project are a combination of how the components were structured and created to achieve the correct appearances, without using fixed heights to improve screen size compatibility.