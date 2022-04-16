import Link from 'next/link'

export default function Home() {

  return (
    <div>
      <div className="absolute navbar">
        <div className="flex-1">
          <a className="text-xl normal-case btn btn-ghost"><span className="mr-1 text-blue-500">Diverse</span> Solutions</a>
        </div>
        <div className="flex-none">
          <ul className="p-0 menu menu-horizontal">
            <li><a href="https://dsolutions.mn/">Website</a></li>
            <li><a href="https://github.com/DiverseSolutions?q=&type=public&language=&sort=">Github</a></li>
          </ul>
        </div>
      </div>
      <div className="min-h-screen hero bg-base-200">
        <div className="text-center hero-content">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold"><span className="text-blue-600">Diverse</span> Chain List ⛓🔥</h1>
            <p className="py-6 text-xl">Easy API endpoints to retrieve json formatted chain lists of every evm compatible blockchain networks we know 🎉 🥳</p>
            <div className="flex flex-col">
              <Link href="/api/chainlist">
                <button className="self-start w-6/12 btn btn-primary">Example Chainlist Endpoint</button>
              </Link>
              <Link href="/api/chainId?chainId=3">
                <button className="self-center w-6/12 my-4 text-white btn btn-warning">Example ChainId Endpoint</button>
              </Link>
              <Link href="/api/chainName?chainName=Ropsten">
                <button className="self-end w-6/12 text-white btn btn-success">Example ChainName Endpoint</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
