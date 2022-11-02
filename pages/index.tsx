import { Roboto_Flex } from '@next/font/google';

const roboto = Roboto_Flex();

const Page = () => {
  return <div className={roboto.className}>Test</div>;
};

export default Page;
