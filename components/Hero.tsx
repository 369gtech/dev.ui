import Link from "next/link";
export default function Hero() {
  return (
    <section className=" text-gray-100 min-h-screen  ">
      <div className="absolute w-full overflow-hidden ">
        <div className="inline-block w-full transform  mt-[-60px] opacity-5">
          <svg
            width="100%"
            height="799"
            viewBox="0 0 1512 799"
            fill="#000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_8_6)">
              <path
                d="M232.659 726.279C228.711 731.732 223.689 736.964 217.595 741.978C211.817 746.908 204.438 750.914 195.46 753.995C193.021 754.987 190.382 755.863 187.543 756.623C184.704 757.384 182.023 758.103 179.5 758.779C154.265 765.54 130.433 766.179 108.003 760.694C85.9728 755.441 66.4371 743.095 49.3966 723.658C32.6715 704.137 19.5331 676.553 9.98269 640.911C-2.01897 596.12 -2.75721 559.299 7.76798 530.447C18.6087 501.51 39.2622 481.439 69.7289 470.233C70.9906 469.895 72.0946 469.599 73.0408 469.345C74.2181 468.692 75.4374 468.196 76.6992 467.858C85.5313 465.491 93.3551 464.409 100.171 464.611C106.986 464.814 113.129 465.027 118.598 465.252L90.4536 360.215L165.801 332.926L219.454 343.905L315.932 703.966L245.062 729.04L232.659 726.279ZM96.326 363.205L128.02 481.49L126.728 482.344C122.829 476.627 116.588 472.89 108.004 471.134C99.3345 469.061 89.3224 469.547 77.967 472.589C77.0207 472.843 75.959 473.296 74.7818 473.95C73.8355 474.204 72.7316 474.499 71.4698 474.837C42.2649 485.705 22.6308 505.166 12.5673 533.218C2.41944 560.954 3.13508 596.429 14.7141 639.643C25.8706 681.279 41.8082 710.478 62.5269 727.24C83.4764 743.6 106.884 748.316 132.749 741.386C134.326 740.963 135.745 740.583 137.007 740.245C138.584 739.822 139.962 739.285 141.139 738.631C155.541 733.082 166.302 725.296 173.421 715.274C180.455 704.937 184.555 694.374 185.72 683.581L187.266 683.673L194.873 712.062L256.406 689.996L162.464 339.398L96.326 363.205ZM136.706 672.88C126.612 675.584 116.543 672.704 106.499 664.239C96.686 655.373 88.5683 638.956 82.1446 614.982C75.7212 591.01 74.3847 572.774 78.135 560.275C81.8854 547.775 90.3732 539.078 103.599 534.181L107.857 533.04C116.058 530.843 123.547 531.034 130.323 533.613C137.1 536.192 142.164 540.583 145.516 546.784L163.011 612.077C166.815 626.272 166.472 638.873 161.984 649.879C157.81 660.801 150.331 668.215 139.545 672.119L136.706 672.88ZM143.827 559.407C137.141 562.213 133.447 568.612 132.743 578.605C132.356 588.513 134.951 603.876 140.529 624.694C142.304 631.318 144.152 637.583 146.073 643.493C147.91 649.086 150.124 653.564 152.716 656.926C161.073 645.22 162.928 630.695 158.28 613.345L143.827 559.407ZM600.344 549.155C598.927 577.933 592.056 602.762 579.735 623.645C567.727 644.443 547.868 659.906 520.155 670.036C516.771 671.281 513.342 672.368 509.873 673.298C506.803 674.46 503.533 675.504 500.064 676.433C472.622 683.787 446.34 684.743 421.217 679.304C396.494 674.097 374.665 662.027 355.733 643.097C336.8 624.168 322.895 598.142 314.021 565.022C306.245 536.003 304.414 509.617 308.531 485.862C312.961 462.024 322.088 441.83 335.909 425.28C349.962 408.329 367.773 395.95 389.347 388.141C391.471 387.234 393.635 386.485 395.844 385.893C398.367 385.217 400.732 384.583 402.941 383.991C420.604 379.259 438.799 377.764 457.522 379.509C476.478 380.853 494.627 386.132 511.97 395.346C529.629 404.475 545.307 418.192 559.001 436.498C572.927 454.403 583.693 477.55 591.3 505.939C591.976 508.461 592.695 511.143 593.455 513.982C594.131 516.505 594.651 519.072 595.011 521.679L546.472 539.249L600.344 549.155ZM478.921 542.643C478.956 554.129 476.118 564.354 470.407 573.323C464.696 582.291 456.016 589.01 444.368 593.484L440.583 594.499C429.858 597.373 419.971 595.797 410.918 589.77C401.865 583.743 395.48 573.79 391.761 559.912L535.485 507.709C534.956 504.47 534.31 501.432 533.55 498.593C532.704 495.439 531.901 492.442 531.141 489.603C520.491 449.859 503.692 421.23 480.743 403.714C457.793 386.198 431.335 381.454 401.37 389.484C399.794 389.906 398.058 390.371 396.166 390.878C394.589 391.3 392.896 391.923 391.088 392.746C370.376 399.986 353.267 411.839 339.762 428.304C326.173 444.454 317.392 464.049 313.423 487.087C309.454 510.125 311.23 535.681 318.752 563.754C329.655 604.444 346.958 632.432 370.663 647.717C394.368 663.003 421.359 666.588 451.64 658.475C453.849 657.883 456.055 657.292 458.264 656.7C460.473 656.108 462.637 655.36 464.762 654.452C491.296 644.975 510.38 630.397 522.009 610.714C533.954 590.947 540.311 568.623 541.082 543.736L478.921 542.643ZM379.928 506.286C377.139 495.877 378.358 485.915 383.584 476.401C388.809 466.887 396.974 460.136 408.076 456.147L412.334 455.006C421.797 452.47 430.285 453.239 437.8 457.31C445.545 460.982 450.897 468.338 453.855 479.378L379.928 506.286ZM440.312 578.344C440.734 579.92 441.787 581.33 443.472 582.568C445.471 583.722 447.472 584.878 449.471 586.032C454.726 582.934 458.635 579.859 461.198 576.804C463.761 573.75 465.849 570.826 467.466 568.025L440.312 578.344ZM703.076 588.06L550.211 358.223L628.271 329.7L681.924 340.679L708.289 382.297L711.256 304.421L784.711 277.64L838.364 288.619L821.448 575.613L756.729 599.039L703.076 588.06ZM716.309 308.139L710.222 469.002L625.88 335.919L557.976 360.706L704.647 582.568L763.342 561.263L779.608 285.092L716.309 308.139ZM915.943 540.151L891.094 447.415L974.232 417.025L1027.88 428.004L1052.86 521.213L969.596 551.13L915.943 540.151ZM896.967 450.405L919.28 533.678L993.334 507.243L970.895 423.497L896.967 450.405ZM1244.68 458.658C1242.06 462.743 1237.34 467.218 1230.53 472.085C1224.03 476.868 1216.61 480.717 1208.27 483.629C1206.77 484.367 1205.08 484.989 1203.19 485.497C1201.29 486.004 1199.56 486.469 1197.98 486.891C1185.36 490.272 1171.97 492.001 1157.79 492.082C1144.01 492.392 1130.63 490.4 1117.65 486.104C1104.75 482.121 1093.31 475.384 1083.33 465.888C1073.57 455.991 1066.54 443.001 1062.23 426.914L1010.38 233.399L1085.73 206.11L1133.89 215.518L1176.11 373.074C1177.26 371.076 1178.43 369.749 1179.6 369.095C1181.01 368.042 1182.05 366.242 1182.72 363.695L1136.83 192.418L1211.7 165.256L1265.35 176.236L1335.08 436.463L1263.87 462.138L1244.68 458.658ZM1142.7 195.409L1187.71 363.374C1186.16 370.213 1183.21 376.243 1178.86 381.464C1174.74 386.286 1168.4 390.353 1159.82 393.666L1157.45 394.3C1150.83 396.075 1144.4 395.43 1138.17 392.367C1132.26 389.22 1127.86 382.283 1124.99 371.558L1082.39 212.583L1016.25 236.389L1066.97 425.646C1072.8 447.411 1083.02 461.575 1097.62 468.143C1112.23 474.71 1128.36 475.626 1146.03 470.893L1155.02 468.484C1169.74 462.851 1181.4 454.654 1190.01 443.894C1198.85 432.736 1202.97 420.982 1202.37 408.635L1203.92 408.728L1213.68 445.159L1275.56 422.493L1208.37 171.729L1142.7 195.409ZM1377.46 407.358L1307.74 147.13L1339.28 136.144L1301.72 128.458L1280.17 48.0244L1357.41 20.2285L1411.06 31.2078L1432.61 111.642L1399.78 123.482L1436.26 130.948L1505.86 390.702L1430.99 417.864L1377.46 407.358ZM1286.04 51.0149L1305.06 121.986L1373.09 97.672L1354.07 26.7008L1286.04 51.0149ZM1313.61 150.121L1380.8 400.886L1446.47 377.206L1379.27 126.441L1313.61 150.121Z"
                className="fill-current"
                fillRule="nonzero"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_8_6">
                <rect
                  width="1512.64"
                  height="421.306"
                  fill="white"
                  transform="translate(-58 391.501) rotate(-15)"
                />
              </clipPath>
            </defs>
          </svg>

        
          

      
        </div>
      </div>
      <div className="container flex relative z-10 flex-col justify-center items-center p-6 mx-auto py-24 text-center">
        <div className="flex flex-col dark:text-white  justify-center p-6 text-center rounded-sm  ">
          
          <h1 className="hero-title text-[72px] font-bold leading-none "> dev.UI </h1>
        
          <h1 className="hero-title text-3xl font-semibold flex flex-col my-4 " > Collection of UI components <span> and templates  </span></h1>
          <div className="flex  items-center  justify-center ">
            <Link href="/components">
              <span className="px-8 py-3 min-h-[3rem]  active:scale-105 scale-110 active:transition-all text-lg font-bold rounded bg-indigo-500 text-white ">
                Components
              </span>
            </Link>{" "}
          </div>
        </div>
        {/* <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="/javascript_illustration.png"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 "
          />
        </div> */}
      </div>
    </section>
  );
}
//In a matter of minutes, you can launch your next website.
