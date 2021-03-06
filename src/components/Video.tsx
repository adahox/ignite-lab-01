import '@vime/core/themes/default.css';
import { Player, Youtube, DefaultUi } from '@vime/react';
import { DiscordLogo, Lightning, FileArrowDown, CaretRight, FileImage, Question } from 'phosphor-react';
import { useGetLessonBySlugQuery } from '../graphql/generated';


interface VideoProps {
    slug: string;
}

export function Video(props: VideoProps) {


    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: props.slug
        }
    });

    if (!data || !data?.lesson) {
        return (
            <div className="flex-1 justify-center items-center">
                <p>Carregando...</p>
            </div>
        )
    }

    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w[110px] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            {data.lesson.title}
                        </h1>
                        <p className="mt-4 text-gray-200">
                            {data.lesson.description}
                        </p>
                        {
                            data.lesson.teacher && (
                                <div className="flex item-center gap-4 mt-6">
                                    <img
                                        className="h-16 w-16 rounded-full border-2 border-blue-500"
                                        src={data.lesson.teacher.avatarURL}
                                    />

                                    <div className="leading-relaxed">
                                        <strong className="font-bold text-2xl block">
                                            {data.lesson.teacher.name}
                                        </strong>
                                        <span className="text-gray-200 text-sm block">
                                            {data.lesson.teacher.bio}
                                        </span>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="flex flex-col gap-4">
                        <a href="#" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center">
                            <DiscordLogo size={24} />
                            Comunidade do Discord
                        </a>
                        <a href="#" className="p-4 text-sm bg-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center">
                            <Lightning size={24} />
                            Acesse o desafio
                        </a>
                    </div>
                </div>
                <div className="gap-8 mt-20 grid grid-cols-3">
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Material Complementar</strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileImage size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Wallpapers Exclusivos</strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Wallpapers Exclusivos
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <Question size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">D??vidas ?</strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Acesse nossa comunidade e tire todas as suas d??vidas.
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}