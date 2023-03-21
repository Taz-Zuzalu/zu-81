import NextImage from "next/image"
import { useRouter } from "next/router"
import NextLink from "next/link"
import axios from "axios"
import { SessionsDTO } from "../../types"

type Props = {
    sessions: SessionsDTO[]
}

const CalendarPageSessions = ({ sessions }: Props) => (
    <div className="w-full flex flex-col items-start py-[2px] gap-[16px] rounded-[16px]">
        {sessions.map((item, index) => (
            <div className="w-full" key={index}>
                <div className="bg-[#1C2928] w-full flex flex-row items-center rounded-[8px]">
                    <p className="text-white py-[8px] px-[16px]">{item.startTime.slice(0, -3)}</p>
                </div>

                <div className="w-full flex flex-col items-start gap-[32px] bg-[#FCFFFE]] rounded-[16px] p-[16px]">
                    <div className="w-full flex flex-row justify-between items-center gap-[67px]]">
                        <div className="flex flex-row items-center gap-[16px]">
                            <NextLink href={`/event/${item.event_id}/session/${item.id}`}>
                                <h3 className="text-lg text-[#424242] font-[600] text-[24px] border-b border-[#52B5A4] cursor-pointer">
                                    {item.name}
                                </h3>
                            </NextLink>
                            <NextImage
                                className="text-[#91A8A7] cursor-pointer"
                                src={"/vector-bookmark.svg"}
                                alt="vector-bookmark"
                                width={24}
                                height={24}
                                // onClick={() => handleClickFavorite()}
                            />
                        </div>
                        <button
                            className="bg-[#35655F] text-white py-[4px] px-[16px] text-[16px] rounded-[6px]"
                            // onClick={() => handleClickAttend()}
                        >
                            RSVP
                        </button>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-[32px] justify-between md:items-center items-start">
                        <div className="flex flex-row items-start gap-[8px]">
                            {item.team_members.map((organizer : any, key : any) => (
                                <div
                                    className="flex flex-row items-center bg-[#E4EAEA] py-[4px] px-[8px] gap-[8px] text-sm rounded-[4px]"
                                    key={key}
                                >
                                    {organizer.role === "Speaker" && (
                                        <NextImage src={"/user-icon-6.svg"} alt="user-icon-6" width={24} height={24} />
                                    )}
                                    {organizer.role === "Organizer" && (
                                        <NextImage src={"/user-icon-4.svg"} alt="user-icon-6" width={24} height={24} />
                                    )}
                                    <p className="text-[#1C2928] font-[400] text-[16px]">
                                        {organizer.role}:{" "}
                                        <span className="font-[600] capitalize">{organizer.name}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row w-full md:w-auto justify-between items-end gap-[32px] text-sm">
                            <div className="flex flex-row items-center gap-[8px]">
                                <NextImage src={"/vector-clock.svg"} alt="vector-clock" width={16} height={16} />
                                <p className="text-[#708E8C] text-[18px]">
                                    {item.startTime.slice(0, -3)}-{item.endTime.slice(0, -3)}
                                </p>
                            </div>
                            <div className="flex flex-row items-center gap-[8px] border-b border-[#708E8C] text-[#708E8C]">
                                <NextImage src={"/vector-location.svg"} alt="location" width={15} height={15} />
                                <p className="text-[18px]">{item.location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
)

export default CalendarPageSessions
