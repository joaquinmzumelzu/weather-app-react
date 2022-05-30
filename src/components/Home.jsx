import { Link } from "react-router-dom";


export default function Home () {
    return (
        <div>
          <p>este es tu primer componente</p>
            <Link to = '/componente2'>
              <p>y este mi primer link</p>          
            </Link>
        </div>
    )
} 