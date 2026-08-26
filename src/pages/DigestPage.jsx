import { DigestDetail } from "../components/digest/DigestDetail";
import { sampleDigest } from "./sampleDigest";

export function DigestPage() {
  return <DigestDetail digest={sampleDigest} />;
}
