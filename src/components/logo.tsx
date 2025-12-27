import Image from 'next/image';

export function Logo({ size = 24 }: { size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="TremplinVideoLab Logo"
      width={size}
      height={size}
    />
  );
}
