import { PropsWithChildren, useMemo, useState } from "react";
import { AuthProvider } from "oidc-react";
import { SingleSpaContext } from "single-spa-react";
import RootLayout from "./layouts/RootLayout";

const appProps = {
  name: import.meta.env.VITE_APP_TITLE,
  singleSpa: null,
  mountParcel: () => ({
    mount: () => Promise.resolve(null),
    unmount: () => Promise.resolve(null),
    getStatus: () => "MOUNTED" as "MOUNTED",
    loadPromise: Promise.resolve(null),
    bootstrapPromise: Promise.resolve(null),
    mountPromise: Promise.resolve(null),
    unmountPromise: Promise.resolve(null),
  }),
};

function Root({ children }: PropsWithChildren<{}>) {
  const [customProps, setCustomProps] = useState<CustomProps>({});
  const contextValue = useMemo(
    () => ({
      ...appProps,
      ...customProps,
    }),
    [customProps]
  );

  return (
    <AuthProvider
      authority="https://demo-account.kemenkeu.go.id"
      clientId="oa-local"
      redirectUri="http://localhost:4200"
      scope="openid profile"
      onSignIn={(user) => {
        setCustomProps({
          userProfile: user?.profile as UserProfile,
          token: user?.access_token,
        });
        window.location.href = import.meta.env.VITE_APP_BASEPATH;
      }}
    >
      <RootLayout>
        <SingleSpaContext.Provider value={contextValue}>
          {children}
        </SingleSpaContext.Provider>
      </RootLayout>
    </AuthProvider>
  );
}

export default Root;
