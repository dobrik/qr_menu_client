import { Container, Line, LineWrapper, Typography } from "@components/ui";
import { useTranslation } from "@hooks";

export const Info = () => {
  const t = useTranslation();
  return (
    <section className="info">
      <Container>
        <div className="info__wrapper stack column">
          <div className="info__text stack column">
            <Typography tag="h1" variant="h1" weight="900" center>
              {t.title.restaurant}
            </Typography>
            <div className="info__text-wrapper stack align-center">
              <Typography tag="p" variant="p" color="dark">
                {t.subtitle.location}
              </Typography>
              <span>
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_13_1022)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.91193 13.8383C8.18478 14.6365 7.33795 15.3514 6.38705 15.9295C6.26998 16.0154 6.11128 16.0258 5.9812 15.9425C4.57632 15.048 3.39648 13.9738 2.469 12.8058C1.189 11.199 0.3838 9.41777 0.108028 7.70162C-0.172948 5.96204 0.0898164 4.28756 0.954857 2.92688C1.29567 2.38912 1.73144 1.89954 2.26217 1.47636C3.48234 0.503703 4.87551 -0.0106201 6.26478 -0.00020343C7.60201 0.0102132 8.92234 0.508911 10.0631 1.55188C10.4638 1.91646 10.8007 2.33443 11.0765 2.78756C12.0066 4.32141 12.2069 6.27714 11.7984 8.25891C11.3952 10.2172 10.3936 12.2068 8.91193 13.8344V13.8383ZM5.99941 3.09355C7.64884 3.09355 8.98478 4.43209 8.98478 6.08183C8.98478 7.73287 7.64754 9.07011 5.99941 9.07011C4.34998 9.07011 3.01404 7.73287 3.01404 6.08183C3.01274 4.43079 4.34998 3.09355 5.99941 3.09355Z"
                      fill="#DF4336"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13_1022">
                      <rect width="12" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>

          <div className="info__about stack column">
            <LineWrapper>
              <Typography tag="h2" variant="h2" weight="700">
                {t.title.about}
              </Typography>
              <Line />
            </LineWrapper>
            <Typography tag="p" variant="p">
              {t.subtitle.about}
            </Typography>
          </div>

          <div className="info__text stack column">
            <div className="info__text-wrapper stack align-center">
              <Typography tag="p" variant="p" color="dark">
                {t.subtitle.address}
              </Typography>
              <span>
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_13_1022)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.91193 13.8383C8.18478 14.6365 7.33795 15.3514 6.38705 15.9295C6.26998 16.0154 6.11128 16.0258 5.9812 15.9425C4.57632 15.048 3.39648 13.9738 2.469 12.8058C1.189 11.199 0.3838 9.41777 0.108028 7.70162C-0.172948 5.96204 0.0898164 4.28756 0.954857 2.92688C1.29567 2.38912 1.73144 1.89954 2.26217 1.47636C3.48234 0.503703 4.87551 -0.0106201 6.26478 -0.00020343C7.60201 0.0102132 8.92234 0.508911 10.0631 1.55188C10.4638 1.91646 10.8007 2.33443 11.0765 2.78756C12.0066 4.32141 12.2069 6.27714 11.7984 8.25891C11.3952 10.2172 10.3936 12.2068 8.91193 13.8344V13.8383ZM5.99941 3.09355C7.64884 3.09355 8.98478 4.43209 8.98478 6.08183C8.98478 7.73287 7.64754 9.07011 5.99941 9.07011C4.34998 9.07011 3.01404 7.73287 3.01404 6.08183C3.01274 4.43079 4.34998 3.09355 5.99941 3.09355Z"
                      fill="#DF4336"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13_1022">
                      <rect width="12" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
            <Typography tag="p" variant="p" verticalLine>
              {t.subtitle.location}
            </Typography>
          </div>

          <div className="info__text stack column">
            <div className="info__text-wrapper stack align-center">
              <Typography tag="p" variant="p" color="dark">
                {t.subtitle.hours}
              </Typography>
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_13_1043)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 0C12.418 0 16 3.58203 16 8C16 12.418 12.418 16 8 16C3.58203 16 0 12.418 0 8C0 3.58203 3.58203 0 8 0ZM6.89063 3.97396H7.86849C8.04688 3.97396 8.19401 4.12109 8.19401 4.29948V8.06771H11.6328C11.8125 8.06771 11.9583 8.21484 11.9583 8.39323V9.37109C11.9583 9.55078 11.8112 9.69662 11.6328 9.69662H6.5638V4.29948C6.5638 4.11979 6.71094 3.97396 6.89063 3.97396ZM8 1.81641C11.4154 1.81641 14.1836 4.58464 14.1836 8C14.1836 11.4154 11.4154 14.1836 8 14.1836C4.58464 14.1836 1.81641 11.4154 1.81641 8C1.81641 4.58594 4.58464 1.81641 8 1.81641Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13_1043">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
            <div className="info__table">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <Typography
                        className="info__day"
                        tag="p"
                        variant="p"
                        verticalLine
                      >
                        {t.common.monday}
                      </Typography>
                    </td>
                    <td>10:00-22:00</td>
                  </tr>
                  <tr>
                    <td>
                      <Typography
                        className="info__day"
                        tag="p"
                        variant="p"
                        verticalLine
                      >
                        {t.common.tuesday}
                      </Typography>
                    </td>
                    <td>10:00-22:00</td>
                  </tr>
                  <tr>
                    <td>
                      <Typography
                        className="info__day"
                        tag="p"
                        variant="p"
                        verticalLine
                      >
                        {t.common.wednesday}
                      </Typography>
                    </td>
                    <td>10:00-22:00</td>
                  </tr>
                  <tr>
                    <td>
                      <Typography
                        className="info__day"
                        tag="p"
                        variant="p"
                        verticalLine
                      >
                        {t.common.thursday}
                      </Typography>
                    </td>
                    <td>10:00-22:00</td>
                  </tr>
                  <tr>
                    <td>
                      <Typography
                        className="info__day"
                        tag="p"
                        variant="p"
                        verticalLine
                      >
                        {t.common.friday}
                      </Typography>
                    </td>
                    <td>10:00-22:00</td>
                  </tr>
                  <tr>
                    <td>
                      <Typography tag="p" variant="p" verticalLine>
                        {t.common.saturday}
                      </Typography>
                    </td>
                    <td>10:00-22:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="info__contact stack column">
            <div className="info__text stack column">
              <div className="info__text-wrapper stack align-center">
                <Typography tag="p" variant="p" color="dark">
                  {t.subtitle.delivery}
                </Typography>
                <span>
                  <svg
                    width="9"
                    height="10"
                    viewBox="0 0 9 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_13_1065)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.108507 1.68573C0.822223 2.21276 1.53026 2.7428 2.12791 3.42527C1.78533 5.05186 3.15265 6.35145 4.39966 7.11709C4.88784 7.41682 5.10361 7.62695 5.64706 7.52596L7.78722 9.77992C3.75961 11.2339 -0.760414 5.13389 0.108507 1.68573ZM6.19875 6.94644L6.66823 6.43389C6.8036 6.28586 7.02709 6.28398 7.16481 6.42958L8.89569 8.26141C9.03333 8.407 9.03507 8.64724 8.8997 8.79519L8.43007 9.30782C8.29463 9.45577 8.07113 9.45765 7.93342 9.31205L6.20254 7.48022C6.06482 7.33471 6.06316 7.09447 6.19875 6.94644ZM0.530362 0.607658L0.871056 0.162985C1.0171 -0.0276119 1.28178 -0.055119 1.45909 0.101867L3.23108 1.671C3.40839 1.82815 3.43376 2.1125 3.28786 2.30334L2.94702 2.74777C2.8009 2.93861 2.53629 2.96587 2.3589 2.80888L0.58722 1.23975C0.409908 1.08277 0.384166 0.798255 0.530362 0.607658Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_13_1065">
                        <rect width="9" height="10" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
              <a href="tel:+380999999999">
                <Typography tag="p" variant="p" verticalLine>
                  +38 (099) 999-99-99
                </Typography>
              </a>
            </div>

            <div className="info__text stack column">
              <div className="info__text-wrapper stack align-center">
                <Typography tag="p" variant="p" color="dark">
                  {t.subtitle.booking}
                </Typography>
                <span>
                  <svg
                    width="9"
                    height="10"
                    viewBox="0 0 9 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_13_1065)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.108507 1.68573C0.822223 2.21276 1.53026 2.7428 2.12791 3.42527C1.78533 5.05186 3.15265 6.35145 4.39966 7.11709C4.88784 7.41682 5.10361 7.62695 5.64706 7.52596L7.78722 9.77992C3.75961 11.2339 -0.760414 5.13389 0.108507 1.68573ZM6.19875 6.94644L6.66823 6.43389C6.8036 6.28586 7.02709 6.28398 7.16481 6.42958L8.89569 8.26141C9.03333 8.407 9.03507 8.64724 8.8997 8.79519L8.43007 9.30782C8.29463 9.45577 8.07113 9.45765 7.93342 9.31205L6.20254 7.48022C6.06482 7.33471 6.06316 7.09447 6.19875 6.94644ZM0.530362 0.607658L0.871056 0.162985C1.0171 -0.0276119 1.28178 -0.055119 1.45909 0.101867L3.23108 1.671C3.40839 1.82815 3.43376 2.1125 3.28786 2.30334L2.94702 2.74777C2.8009 2.93861 2.53629 2.96587 2.3589 2.80888L0.58722 1.23975C0.409908 1.08277 0.384166 0.798255 0.530362 0.607658Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_13_1065">
                        <rect width="9" height="10" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
              <a href="tel:+380999999999">
                <Typography tag="p" variant="p" verticalLine>
                  +38 (099) 999-99-99
                </Typography>
              </a>
            </div>

            <div className="info__text stack column">
              <div className="info__text-wrapper stack align-center">
                <Typography tag="p" variant="p" color="dark">
                  {t.subtitle.admin}
                </Typography>
                <span>
                  <svg
                    width="9"
                    height="10"
                    viewBox="0 0 9 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_13_1065)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.108507 1.68573C0.822223 2.21276 1.53026 2.7428 2.12791 3.42527C1.78533 5.05186 3.15265 6.35145 4.39966 7.11709C4.88784 7.41682 5.10361 7.62695 5.64706 7.52596L7.78722 9.77992C3.75961 11.2339 -0.760414 5.13389 0.108507 1.68573ZM6.19875 6.94644L6.66823 6.43389C6.8036 6.28586 7.02709 6.28398 7.16481 6.42958L8.89569 8.26141C9.03333 8.407 9.03507 8.64724 8.8997 8.79519L8.43007 9.30782C8.29463 9.45577 8.07113 9.45765 7.93342 9.31205L6.20254 7.48022C6.06482 7.33471 6.06316 7.09447 6.19875 6.94644ZM0.530362 0.607658L0.871056 0.162985C1.0171 -0.0276119 1.28178 -0.055119 1.45909 0.101867L3.23108 1.671C3.40839 1.82815 3.43376 2.1125 3.28786 2.30334L2.94702 2.74777C2.8009 2.93861 2.53629 2.96587 2.3589 2.80888L0.58722 1.23975C0.409908 1.08277 0.384166 0.798255 0.530362 0.607658Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_13_1065">
                        <rect width="9" height="10" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
              <a href="tel:+380999999999">
                <Typography tag="p" variant="p" verticalLine>
                  +38 (099) 999-99-99
                </Typography>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
