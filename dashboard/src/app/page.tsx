import UserDataPage from "@/app/sitecomponents/UserDataPage";
import ThemeButton from '@/app/sitecomponents/ThemeButton';
import HyperText from "@/components/ui/hyper-text";
import Meteor from '@/app/sitecomponents/Meteor';

export default function Home() {

    return (
        <>
            <div className='flex justify-between items-center'>
                <span className='mx-auto'>
                <HyperText text='ZEEZIP Project' className='text-3xl font-black text-green-600'/>
                    </span>
                <ThemeButton />

            </div>
            <div className="flex justify-end">
                <UserDataPage/>
            </div>
        </>
    );
}
