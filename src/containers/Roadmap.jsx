

const Roadmap = () => {

return (
    <div className="w-full mx-auto bg-black text-white pb-24">
        <div className="mb-12">
            <h2 className="text-xl md:text-4xl uppercase">Roadmap</h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5">
            <div className="text-right text-black text-xl md:text-2xl">
                <h3 className="bg-white p-1">Stage <label className="text-red-800">1</label></h3>
            </div>
            <div className="p-1 pl-12 text-left text-white col-span-2 md:col-span-3">
                <h3 className="text-xl md:text-2xl uppercase mb-4">Create and Sell a collection of NFT’s. Build a community. </h3>
                <p className="text-lg md:text-xl">When 95% of NFT’s are minted. Stage 2 unlocks new and unique features. The Treasury Pool gets created, all utilities are activated and all NFT’s unlocks equals percentage ownership of the treasury pool. </p>
            </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 mt-12">
            <div className="text-right text-black text-xl md:text-2xl">
                <h3 className="bg-white p-1">Stage <label className="text-red-800">2</label></h3>
            </div>
            <div className="p-1 pl-12 text-left text-white col-span-2 md:col-span-3">
                <h3 className="text-xl md:text-2xl uppercase mb-4">Create and Sell a second collection of NFT’s. Start building profits. </h3>
                <p className="text-lg md:text-xl">Profits from minting ; 25% to founders and 75% to Treasury Pool ( start investing funds while still building project ). NFT mint price increase of 15% from Stage 1.
<br></br>All “Original” holders have first priority for the new whitelist. When 95% NFT’s are minted, stage 3 is unlocked. 
                </p>
            </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 mt-12">
            <div className="text-right text-black text-xl md:text-2xl">
                <h3 className="bg-white p-1">Stage <label className="text-red-800">3</label></h3>
            </div>
            <div className="p-1 pl-12 text-left text-white col-span-2 md:col-span-3">
                <h3 className="text-xl md:text-2xl uppercase mb-4">Create and sell a third collection of NFT’s. Make huge returns on our investments. </h3>
                <p className="text-lg md:text-xl">100% of the profits to the Treasury Pool. <br></br>
NFT mint price increase 25% from Stage 2 <br></br>
All “Original” holders have first priority for the new whitelist. 

                </p>
            </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 mt-12">
            <div className="text-right text-black text-xl md:text-2xl">
                <h3 className="bg-white p-1">Stage <label className="text-red-800">4</label></h3>
            </div>
            <div className="p-1 pl-12 text-left text-white col-span-2 md:col-span-3">
                <h3 className="text-xl md:text-2xl uppercase mb-4">Continue to vote on the future investments as a group</h3>
                <p className="text-lg md:text-xl">Do we keep building profits and compound our interest or do we just split the treasury equally and enjoy the success? Our team's thinking ; It’s feasible to believe this project could build a substantial treasury in a short period of time. Imagine, if we as partners, invest and tackle some simple investment strategies. For example, a simple plan like stable coin lending, we could have low risk profits immediately. We then can send those profits equally to everyone in stable coins. Just think if we create a treasury with the possibility of a daily income of thousands of dollars? 
What could the future hold?
                </p>
            </div>
        </div>
    </div>

)
}

export default Roadmap;