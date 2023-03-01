import PeopleIcon from '@mui/icons-material/People';

const TeamInfos = ({ formValues, onChange} ) => {
    return(
        // dark:bg-slate-800 dark:text-white
        <div className='w-full max-h-sm max-w-screen-2xl'>
            <form action="" className='bg-white shadow-md px-20 pt-16 pb-10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200'>
                <div
                    className='grid place-content-center
                        items-center text-center
                        hover:text-left'

                >
                    <h1 className='text-blue-700 font-bold text-xl'>
                        <PeopleIcon/> Информация о команде
                    </h1>
                </div>
                <div className='flex justify-items-center content-center items-center gap-4'>
                {/*<div className='grid grid-flow-col auto-rows-max gap-4'>*/}
                    <div className="row-span-1 md:row-span-4 mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="Name of the group">Название команды</label>
                        <input
                            type='text'
                            id='teamName'
                            name='teamName'
                            value={formValues.teamName}
                            onChange={onChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"/>
                    </div>
                    <div className="mb-2 row-span-2">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="Email team">Электронная почта команды</label>
                        <input
                            type='email'
                            id='teamEmail'
                            name='teamEmail'
                            value={formValues.teamEmail}
                            onChange={onChange}
                            className="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700"
                        />
                    </div>
                </div>

                <div className="mb-2">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="educational organization">Образовательная организация</label>
                    <input
                        type='text'
                        id='teamInstitution'
                        name='teamInstitution'
                        value={formValues.teamInstitution}
                        onChange={onChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"/>
                </div>
                <div className="mb-2">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="town">Город/Поселок</label>
                    <input
                        type='text'
                        id='teamCity'
                        name='teamCity'
                        value={formValues.teamCity}
                        onChange={onChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"/>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="Patronymic">Состав команды и роли</label>
                    <span
                        className='text-sm lowercase hover:uppercase sm:uppercase font-bold text-left text-pink-500'>
                        Формат:
                        <ul>
                            <li>ИВАН ИВАНОВ: руководитель,</li>
                            <li>ЕВГЕНИЙ ЕВГЕВИЧ: аналитик,</li>
                            <li>Дональд Дональдович: дизайнер,</li>
                            <li>...</li>
                        </ul>
                    </span>
                    <textarea
                        type='text'
                        id='teamMembers'
                        name='teamMembers'
                        value={formValues.teamMembers}
                        onChange={onChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"/>
                </div>

            </form>
        </div>
    )
}

export default TeamInfos