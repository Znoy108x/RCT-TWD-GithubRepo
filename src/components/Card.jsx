import React from 'react'
const Card = ({ avatar, repo_name, description, language, stargazers_count, name, forks, profile_url }) => {
    return (
        <div className=" w-full hover:scale-110 duration-200 hover:shadow-2xl shadow-2xl">
            <a className="relative block p-8 overflow-hidden border border-gray-100 rounded-lg" href={profile_url}>
                <span
                    className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                ></span>
                <div className="justify-between sm:flex">
                    <div>
                        <h5 className="text-xl font-bold text-gray-900">
                            {repo_name.toUpperCase()}
                        </h5>
                        <p className="mt-1 text-xs font-medium text-gray-600">{name.toUpperCase()}</p>
                    </div>
                    <div className="flex-shrink-0 hidden ml-3 sm:block">
                        <img
                            className="object-cover w-16 h-16 rounded-lg shadow-sm"
                            src={avatar}
                            alt=""
                        />
                    </div>
                </div>
                <div className="mt-4 sm:pr-8">
                    <p className="text-xs text-gray-500">
                        {description ?description.substring(0, 90) :"This is the python langauge repo"}...
                    </p>
                </div>
                <dl className="flex mt-6">
                    <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">{stargazers_count}</dt>
                        <dd className="text-xs text-gray-500">Stars</dd>
                    </div>
                    <div className="flex flex-col-reverse ml-3 sm:ml-6">
                        <dt className="text-sm font-medium text-gray-600">{forks}</dt>
                        <dd className="text-xs text-gray-500">Forks</dd>
                    </div>
                    <div className="flex flex-col-reverse ml-3 sm:ml-6">
                        <dt className="text-sm font-medium text-gray-600">{language}</dt>
                        <dd className="text-xs text-gray-500">Language</dd>
                    </div>
                </dl>
            </a>
           
        </div>
    )
}
export default Card