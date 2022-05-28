import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const FAQ = () => {

return (
    <div id="faq" className="w-full mx-auto pt-20 pb-20">
        <div className="mb-12">
            <h2 className="text-xl md:text-4xl uppercase">FAQ</h2>
        </div>
        <div className="w-4/5 md:w-3/4 mx-auto">
        <Accordion>
            <AccordionItem className="mt-4 mb-8">
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <h3 className="text-xl md:text-2xl underline pb-4">Estimated Mint Costs</h3>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="bg-white rounded-lg text-black pl-12 pt-4 pb-4">
                        <p className="text-left text-lg md:text-xl">Presale - $145</p>
                        <p className="text-left text-lg md:text-xl">Public Sale - $175</p>
                        <p className="text-left text-lg md:text-xl">Price increases - $15 with every 100 Sold</p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="mt-4 mb-8">
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <h3 className="text-xl md:text-2xl underline pb-4">Dates</h3>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="bg-white rounded-lg text-black pl-12 pt-4 pb-4">
                        <p className="text-left text-lg md:text-xl">Whitelist Launch 6/10/2022 24 hours</p>
                        <p className="text-left text-lg md:text-xl">Public sale 6/11/2022</p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="mt-4 mb-8">
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <h3 className="text-xl md:text-2xl underline pb-4">How To Get Whitelisted</h3>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="bg-white rounded-lg text-black pl-12 pt-4 pb-4">
                        <p className="text-left text-lg md:text-xl">1. Follow us on Twitter </p>
                        <p className="text-left text-lg md:text-xl">2. Join the Whitelist games</p>
                        <p className="text-left text-lg md:text-xl">3. Share and help gain the community more followers</p>
                        <p className="text-left text-lg md:text-xl">4. Email us at <a href="mailto:KnightfallNFT@protonmail.com">KnightfallNFT@protonmail.com</a> with your information.</p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="mt-4 mb-8">
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <h3 className="text-xl md:text-2xl underline pb-4">What marketplace, blockchain and currency</h3>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="bg-white rounded-lg text-black pl-12 pt-4 pb-4">
                        <p className="text-left text-lg md:text-xl">1. Opensea</p>
                        <p className="text-left text-lg md:text-xl">2. Etherum</p>
                        <p className="text-left text-lg md:text-xl">3. ETH </p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="mt-4 mb-8">
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <h3 className="text-xl md:text-2xl underline pb-4">What About Smart Contact</h3>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="bg-white rounded-lg text-black pl-12 pt-4 pb-4">
                        <p className="text-left text-lg md:text-xl">1. We will have the contract audited.</p>
                        <p className="text-left text-lg md:text-xl">2. We will make sure the contract is gas friendly. </p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="mt-4 mb-8">
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <h3 className="text-xl md:text-2xl underline pb-4">How Many Mints Can I do if I win a whitelist spot</h3>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="bg-white rounded-lg text-black pl-12 pt-4 pb-4">
                        <p className="text-left text-lg md:text-xl">2 per whitelist spot , we are also going to try and keep it 1 whitelist spot per wallet/twitter account.</p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="mt-4 mb-8">
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <h3 className="text-xl md:text-2xl underline pb-4">How many whitelist spots available</h3>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="bg-white rounded-lg text-black pl-12 pt-4 pb-4">
                        <p className="text-left text-lg md:text-xl">500 total </p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="mt-4 mb-8">
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <h3 className="text-xl md:text-2xl underline pb-4">Why should I jump in now vs wait till stage 2 or 3 to get in</h3>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="bg-white rounded-lg text-black pl-12 pt-4 pb-4">
                        <p className="text-left text-lg md:text-xl">Simple - COST,  stage 2 and stage 3 will cost more to join. Get in early!</p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
    </div>

)
}

export default FAQ;