import React, {ReactNode} from 'react';


function Layout({children} : {children : ReactNode}) {
    return (
        <main
            className={"bg-[url('/images/auth-back.png')] bg-center bg-cover bg-no-repeat w-full h-screen flex items-center justify-center"}>
            {children}
        </main>
    );
}

export default Layout;