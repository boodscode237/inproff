import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const TeamLeaderInfos = ({ onChange, formValues }) => {
    return(
        <div className='w-full max-w-sm max-h-sm mb-4'>
            <form action="" className='bg-white shadow-md px-24 pt-16 pb-10 mb-8 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200'>
                <div
                    className='grid gap-4 place-content-center
                        items-center text-center
                        hover:text-left'
                >
                    <h1 className='text-blue-700 font-bold text-xl'>
                        <AdminPanelSettingsIcon/> Информация о руководителе команды
                    </h1>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Name">Фамилия</label>
                    <input
                        type='text'
                        id='leaderLastName'
                        name='leaderLastName'
                        value={formValues.leaderLastName}
                        onChange={onChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="LastName">Имя</label>
                    <input
                        type='text'
                        id='leaderName'
                        name='leaderName'
                        value={formValues.leaderName}
                        onChange={onChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="Patronymic">Отчества</label>
                    <input
                        type='text'
                        id='leaderPatronymic'
                        name='leaderPatronymic'
                        value={formValues.leaderPatronymic}
                        onChange={onChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    />
                </div>
            </form>
            {/*<p className='text-center text-gray-500 text-xs'>&copy;2023 ин-проф</p>*/}
        </div>
    )
}

export default TeamLeaderInfos