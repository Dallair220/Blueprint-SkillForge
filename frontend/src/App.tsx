import { Dashboard } from './components/pages/Dashboard';

function App() {
	return (
		<div className='mainLayout h-screen overflow-hidden w-screen'>
			{/** Sidebar */}
			<div className='bg-green-50 grid'></div>
			{/** Main */}
			<div className='bg-green-100'>
				<Dashboard />
			</div>
		</div>
	);
}

export default App;
