import BarChartbox from '../../Components/barChartsbox/BarChartbox'
import BigChartBox from '../../Components/bigCharts/BigChartBox'
import Chartbox from '../../Components/chartBox/Chartbox'
import PieChartBox from '../../Components/pieChartBox/PieChartBox'
import Topbox from '../../Components/TopBox/Topbox'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data'
import './Home.scss'

function Home() {
  return (
    <div className='home'>
      <div className="box box-1">
        <Topbox/>
      </div>
      <div className="box box-2"><Chartbox {...chartBoxUser}/></div>
      <div className="box box-3"><Chartbox {...chartBoxProduct}/></div>
      <div className="box box-4"> <PieChartBox/></div>
      <div className="box box-5"><Chartbox {...chartBoxConversion}/></div>
      <div className="box box-6"><Chartbox {...chartBoxRevenue}/></div>
      <div className="box box-7"><BigChartBox/></div>
      <div className="box box-8"><BarChartbox {...barChartBoxVisit}/></div>
      <div className="box box-9"><BarChartbox{...barChartBoxRevenue}/></div>
    </div>
  )
}

export default Home