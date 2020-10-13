import React from "react";
import theme from "theme";
import { Theme, Box, Link, Text, Icon, Image, Button, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { MdEmail, MdRemoveRedEye, MdDone, MdPeople, MdDataUsage, MdDns, MdAccountBalance, MdCardTravel } from "react-icons/md";
import { FaTelegramPlane, FaUsers, FaSuitcase, FaFireAlt } from "react-icons/fa";
import { IoMdCloudDone } from "react-icons/io";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="0px 0 0px 0" background="#2513D1" position="relative">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Box
				position="absolute"
				width="54%"
				height="100%"
				background="#ff0000"
				transform="skew(38deg)"
				padding="0px 0px 0px 0px"
				margin="0px 0px 0px -20px"
				noutbuk-width="70%"
			/>
			<Stack margin="0px 0px 0px 0px" gap="--cmp-stack-gap-small" width="90%">
				{"    "}
				<StackItem width="70%" display="flex" noutbuk-width="80%">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Text
						font="400 15px --fontFamily-googleRoboto"
						margin="0px 0px 0px 20px"
						display="inline-block"
						color="#ffffff"
						position="relative"
						z-index="2"
					>
						Продажи:{" "}
						<Link href="tel:1111" font="600 15px --fontFamily-googleOpenSans" color="#ffffff" hover-text-decoration-line="initial">
							+7 (499) 653-71-52
						</Link>
						{" "}|
					</Text>
					<Icon
						category="md"
						icon={MdEmail}
						color="#ffffff"
						size="18px"
						margin="3px 0px 0px 10px"
						position="relative"
					/>
					<Icon
						category="fa"
						icon={FaTelegramPlane}
						color="#ffffff"
						size="17px"
						margin="3px 20px 0px 10px"
						position="relative"
					/>
					<Text
						font="400 15px --fontFamily-googleRoboto"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#ffffff"
						position="relative"
						noutbuk-font="400 13px --fontFamily-googleRoboto"
					>
						Поддержка:{" "}
						<Link
							href="tel:1111"
							font="600 15px --fontFamily-googleOpenSans"
							color="#ffffff"
							hover-text-decoration-line="initial"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							+7 (499) 653-71-52
						</Link>
						{" "}|
					</Text>
					<Icon
						category="md"
						icon={MdEmail}
						color="#ffffff"
						size="18px"
						margin="3px 0px 0px 10px"
						position="relative"
					/>
					<Icon
						category="fa"
						icon={FaTelegramPlane}
						color="#ffffff"
						size="17px"
						margin="3px 20px 0px 10px"
						position="relative"
					/>
					<Text
						font="400 15px --fontFamily-googleRoboto"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#ffffff"
						text-decoration-line="underline"
						position="relative"
					>
						<Link
							href="tel:1111"
							font="600 15px --fontFamily-googleOpenSans"
							color="#ffffff"
							hover-text-decoration-line="initial"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							К
						</Link>
						онтакты
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem
					width="30%"
					display="flex"
					align-items="flex-end"
					justify-content="flex-end"
					noutbuk-width="20%"
				>
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
					{"        "}
					<Image width="15px" height="15px" src="https://www.staffcop.ru/templates/rfstaffcoptpl/restyle/img/icon/icon-russia.svg" margin="0px 7px 0px 0px" />
					<Text font="400 14px --fontFamily-googleRoboto" margin="-1px 0px 0px 0px" display="inline-block" color="#ffffff">
						Сделано в России
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#ffffff" padding="0px 0 0px 0">
			<Override slot="SectionContent" max-width="1170px" />
			<Stack gap="0px" width="100%">
				{"    "}
				<StackItem width="20%" display="flex">
					<Override slot="StackItemContent" align-items="center" />
					<Box width="100%" height="40px" background="rgba(0, 0, 0, 0) url(https://www.staffcop.com/templates/frontend/images/staffcop-logo.png) 0 center/auto no-repeat scroll padding-box" />
					{"            "}
				</StackItem>
				{"    "}
				<StackItem width="65%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Link
						href="#"
						text-decoration-line="initial"
						font="--menu"
						color="#000000"
						background="#e7e7e7"
						padding="30px 15px 30px 15px"
					>
						Home
					</Link>
					<Link
						href="#"
						text-decoration-line="initial"
						font="--menu"
						color="#000000"
						padding="30px 15px 30px 15px"
						hover-color="#000000"
					>
						Features
					</Link>
					<Link
						href="#"
						text-decoration-line="initial"
						font="--menu"
						color="#000000"
						padding="30px 15px 30px 15px"
						hover-color="#000000"
					>
						Solutions
					</Link>
					<Link
						href="#"
						text-decoration-line="initial"
						font="--menu"
						color="#000000"
						padding="30px 15px 30px 15px"
						hover-color="#000000"
					>
						Pricing
					</Link>
					<Link
						href="#"
						text-decoration-line="initial"
						font="--menu"
						color="#000000"
						padding="30px 15px 30px 15px"
						hover-color="#000000"
					>
						Contacts
					</Link>
					<Link
						href="#"
						text-decoration-line="initial"
						font="--menu"
						color="#000000"
						padding="30px 15px 30px 15px"
						hover-color="#000000"
					>
						Buy
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="15%" display="flex">
					<Override slot="StackItemContent" justify-content="flex-end" align-items="center" />
					<Button
						background="#FF0000"
						font="600 15px --fontFamily-mono"
						margin="15px 8px 15px 0px"
						padding="9px 30px 11px 30px"
						border-width="2px"
						border-style="solid"
						border-color="rgba(118, 118, 118, 0)"
						hover-background="#2513D1"
						border-radius="0px"
						text-transform="uppercase"
						noutbuk-padding="9px 20px 11px 20px"
					>
						Test Drive
					</Button>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#0B1829 url(https://www.staffcop.ru/templates/rfstaffcoptpl/restyle/img/bg/bg-header-home.jpg) center bottom/cover repeat scroll padding-box" padding="150px 0 200px 0">
			<Override slot="SectionContent" max-width="1170px" />
			<Text text-align="center" color="#ffffff" font="normal 900 72px/1.2 --fontFamily-googleNunito" text-transform="uppercase">
				StaffCop Enterprise
			</Text>
		</Section>
		<Section background="#F4F7FC" padding="24px 0 70px 0">
			<Override slot="SectionContent" max-width="1170px" />
			<Stack position="relative" top="-60px">
				{"    "}
				<StackItem width="33%" display="flex" background="#ffffff" border-radius="8px 0px 0px 8px">
					<Override slot="StackItemContent" align-items="center" padding="20px 10px 20px 20px" />
					{"        "}
					<Image width="120px" src="https://uploads.quarkly.io/5f84eb783d84d4001ec394fc/images/monitor.svg?v=2020-10-13T00:21:14.549Z" object-position="61% 70%" color="#ffffff" />
					<Box display="flex" flex-direction="column">
						<Text font="600 20px --fontFamily-googleNunito" margin="0px 0px 20px 30px" display="inline-block" color="#153144">
							User Activity Monitoring
						</Text>
						<Text font="600 14px --fontFamily-googleNunito" margin="0px 0px 0px 30px" display="inline-block" color="#153144">
							Business solution company sit our any how our company.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33%" display="flex" background="#2513D1">
					<Override slot="StackItemContent" align-items="center" padding="20px 10px 20px 20px" />
					{"        "}
					<Image width="120px" src="https://uploads.quarkly.io/5f84eb783d84d4001ec394fc/images/database.svg?v=2020-10-13T00:23:02.373Z" />
					<Box display="flex" flex-direction="column">
						<Text font="600 20px --fontFamily-googleNunito" margin="0px 0px 20px 30px" display="inline-block" color="#ffffff">
							Data Loss Prevention
							<br />
						</Text>
						<Text font="600 14px --fontFamily-googleNunito" margin="0px 0px 0px 30px" display="inline-block" color="#ffffff">
							Business solution company sit our any how our company.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33%" display="flex" background="#FF0000" border-radius="0px 8px 8px 0px">
					<Override slot="StackItemContent" align-items="center" padding="20px 10px 20px 20px" />
					{"        "}
					<Image width="120px" src="https://uploads.quarkly.io/5f84eb783d84d4001ec394fc/images/analytics.svg?v=2020-10-13T00:25:22.340Z" />
					<Box display="flex" flex-direction="column">
						<Text font="600 20px --fontFamily-googleNunito" margin="0px 0px 20px 30px" display="inline-block" color="#ffffff">
							User Behavior Analytics
							<br />
						</Text>
						<Text font="600 14px --fontFamily-googleNunito" margin="0px 0px 0px 30px" display="inline-block" color="#ffffff">
							Business solution company sit our any how our company.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Text font="normal 600 38px/1.2 --fontFamily-googleNunito" margin="0px 0px 16px 0px" color="ss">
				About company
			</Text>
			<Text font="normal 600 18px/1.35 --fontFamily-googleNunito" margin="0px 0px 16px 0px" color="#153144">
				Компания ООО «Атом Безопасность» приветствует Вас на своём официальном сайте! Мы занимаемся разработкой программ линейки StaffCop, предназначенных для обеспечения информационной безопасности и улучшения эффективности работы организаций и предприятий.
				<br />
				<br />
				Мы работаем с 2001 года, и сегодня нашими клиентами являются более 11 тысяч компаний из 26 стран. Также вы можете ознакомиться с{" "}
				<Link href="https://www.staffcop.ru/#reviews">
					отзывами
				</Link>
				{" "}о Staffcop Enterprise.
			</Text>
		</Section>
		<Section padding="0px 0 0px 0">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				{"    "}
				<StackItem width="25%" display="flex" lg-width="50%">
					{"        "}
					<Box
						width="100%"
						height="300px"
						display="flex"
						align-items="center"
						justify-content="center"
						background="--color-dark url(https://static-cse.canva.com/blob/194828/Professional-Office-Zoom-Virtual-Background.png) 0% 0%/130% no-repeat"
						hover-background="--color-dark url(https://static-cse.canva.com/blob/194828/Professional-Office-Zoom-Virtual-Background.png) 0% 0%/170% no-repeat"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-width="0px 1px 0px 0px"
						border-style="solid"
						border-color="#ffffff"
						noutbuk-background="--color-dark url(https://static-cse.canva.com/blob/194828/Professional-Office-Zoom-Virtual-Background.png) 0% 0%/cover no-repeat"
					>
						<Box
							width="100%"
							height="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							background="rgba(0, 0, 0, 0.81)"
							padding="0px 30px 0px 30px"
							flex-direction="column"
							hover-background="rgba(0, 0, 0, 0.71)"
							border-width="0px"
							border-style="solid"
							border-color="#ffffff"
						>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleNunito"
								margin="0px 0px 30px 0px"
								display="inline-block"
								color="#ffffff"
								text-align="center"
							>
								Helps reduce the risks of data leakage and loss of reputation
							</Text>
							<Button
								font="600 15px --fontFamily-mono"
								margin="25px 8px 0px 0px"
								padding="15px 50px 15px 50px"
								border-width="2px"
								border-style="solid"
								border-color="#2513D1"
								hover-background="#2513D1"
								border-radius="0px"
								background="rgba(0, 119, 204, 0)"
							>
								FREE TRIAL
							</Button>
						</Box>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" lg-width="50%">
					{"        "}
					<Box
						width="100%"
						height="300px"
						display="flex"
						align-items="center"
						justify-content="center"
						background="--color-dark url(https://www.adzuna.ru/blog/wp-content/uploads/2018/09/accountant-accounting-bankbook-948887-1024x616-1024x616.jpg) 0% 0%/125% no-repeat"
						hover-background="--color-dark url(https://www.adzuna.ru/blog/wp-content/uploads/2018/09/accountant-accounting-bankbook-948887-1024x616-1024x616.jpg) 0% 0%/155% no-repeat"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-width="0px 1px 0px 0px"
						border-style="solid"
						border-color="#ffffff"
						noutbuk-background="--color-dark url(https://www.adzuna.ru/blog/wp-content/uploads/2018/09/accountant-accounting-bankbook-948887-1024x616-1024x616.jpg) 0% 0%/cover no-repeat"
					>
						<Box
							width="100%"
							height="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							background="rgba(0, 0, 0, 0.81)"
							padding="0px 30px 0px 30px"
							flex-direction="column"
							hover-background="rgba(255, 0, 0, 0.64)"
							border-style="solid"
							border-color="#ffffff"
							border-width="0px"
						>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleNunito"
								margin="0px 0px 30px 0px"
								display="inline-block"
								color="#ffffff"
								text-align="center"
							>
								Helps reduce the risks of data leakage and loss of reputation
							</Text>
							<Button
								font="600 15px --fontFamily-mono"
								margin="25px 8px 0px 0px"
								padding="15px 50px 15px 50px"
								border-width="2px"
								border-style="solid"
								border-color="#ffffff"
								hover-background="#ffffff"
								border-radius="0px"
								background="rgba(0, 119, 204, 0)"
								hover-border-color="#ffffff"
								hover-color="--dark"
							>
								FREE TRIAL
							</Button>
						</Box>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" lg-width="50%">
					{"        "}
					<Box
						width="100%"
						height="300px"
						display="flex"
						align-items="center"
						justify-content="center"
						background="--color-dark url(https://static-cse.canva.com/blob/194828/Professional-Office-Zoom-Virtual-Background.png) 0% 0%/130% no-repeat"
						hover-background="--color-dark url(https://static-cse.canva.com/blob/194828/Professional-Office-Zoom-Virtual-Background.png) 0% 0%/170% no-repeat"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-width="0px 1px 0px 0px"
						border-style="solid"
						border-color="#ffffff"
						hover-filter="blur(0px)"
						noutbuk-background="--color-dark url(https://static-cse.canva.com/blob/194828/Professional-Office-Zoom-Virtual-Background.png) 0% 0%/cover no-repeat"
					>
						<Box
							width="100%"
							height="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							background="rgba(0, 0, 0, 0.81)"
							padding="0px 30px 0px 30px"
							flex-direction="column"
							hover-background="rgba(78, 151, 210, 0.85)"
							border-style="solid"
							border-color="#ffffff"
							border-width="0px"
						>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleNunito"
								margin="0px 0px 30px 0px"
								display="inline-block"
								color="#ffffff"
								text-align="center"
							>
								Helps reduce the risks of data leakage and loss of reputation
							</Text>
							<Button
								font="600 15px --fontFamily-mono"
								margin="25px 8px 0px 0px"
								padding="15px 50px 15px 50px"
								border-width="2px"
								border-style="solid"
								border-color="#ffffff"
								hover-background="#409EEB"
								border-radius="0px"
								background="rgba(0, 119, 204, 0)"
							>
								FREE TRIAL
							</Button>
						</Box>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" lg-width="50%">
					{"        "}
					<Box
						width="100%"
						height="300px"
						display="flex"
						align-items="center"
						justify-content="center"
						background="--color-dark url(https://www.adzuna.ru/blog/wp-content/uploads/2018/09/accountant-accounting-bankbook-948887-1024x616-1024x616.jpg) 0% 0%/125% no-repeat"
						hover-background="--color-dark url(https://www.adzuna.ru/blog/wp-content/uploads/2018/09/accountant-accounting-bankbook-948887-1024x616-1024x616.jpg) 0% 0%/160% no-repeat"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-width="0px 0px 0px 0px"
						border-style="solid"
						border-color="#ffffff"
						noutbuk-background="--color-dark url(https://www.adzuna.ru/blog/wp-content/uploads/2018/09/accountant-accounting-bankbook-948887-1024x616-1024x616.jpg) 0% 0%/cover no-repeat"
					>
						<Box
							width="100%"
							height="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							background="rgba(0, 0, 0, 0.81)"
							padding="0px 30px 0px 30px"
							flex-direction="column"
							hover-background="rgba(78, 151, 210, 0.85)"
							border-style="solid"
							border-color="#ffffff"
							border-width="0px"
						>
							<Text
								font="normal 600 20px/1.5 --fontFamily-googleNunito"
								margin="0px 0px 30px 0px"
								display="inline-block"
								color="#ffffff"
								text-align="center"
							>
								Helps reduce the risks of data leakage and loss of reputation
							</Text>
							<Button
								font="600 15px --fontFamily-mono"
								margin="25px 8px 0px 0px"
								padding="15px 50px 15px 50px"
								border-width="2px"
								border-style="solid"
								border-color="#ffffff"
								hover-background="#409EEB"
								border-radius="0px"
								background="rgba(0, 119, 204, 0)"
							>
								FREE TRIAL
							</Button>
						</Box>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="60px 0 60px 0" background="#F4F7FC">
			<Override slot="SectionContent" max-width="1170px" />
			<Stack>
				{"    "}
				<StackItem width="33.33%" display="flex" lg-width="50%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						padding="0px 0px 0px 0px"
						align-items="center"
						justify-content="center"
						flex-direction="column"
					/>
					{"        "}
					<Box
						display="flex"
						flex-direction="column"
						height="100%"
						align-items="center"
						padding="40px 30px 40px 30px"
						background="#ffffff"
						border-width="8px"
						border-radius="8px"
						hover-box-shadow="0 5px 50px 0 rgba(0,0,0,.08)"
						hover-transform="translateY(-5px)"
						box-shadow="0 0 1px #cccccc"
						transition=".5s"
					>
						<Box
							margin="0px 0px 20px 0px"
							background="#ECECFF"
							width="70px"
							height="70px"
							border-radius="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							position="relative"
						>
							<Icon category="md" icon={MdRemoveRedEye} size="41px" color="#2513D1" />
							<Icon
								category="md"
								icon={MdDone}
								bottom="auto"
								left="auto"
								position="absolute"
								right="0px"
								top="0px"
								size="19px"
								color="#ffffff"
								background="#2513D1"
								border-radius="100%"
							/>
						</Box>
						<Text font="600 21px --fontFamily-googleNunito" margin="0px 0px 20px 0px" display="inline-block" color="#153144">
							User Activity Monitoring
						</Text>
						<Text
							font="600 16px --fontFamily-googleNunito"
							margin="0px 0px 0px 0px"
							display="inline-block"
							text-align="center"
							color="#153144"
						>
							Monitor and control user activity to ensure compliance with internal security policies and regulatory requirements.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.33%" display="flex" lg-width="50%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						padding="0px 0px 0px 0px"
						align-items="center"
						justify-content="center"
						flex-direction="column"
					/>
					{"        "}
					<Box
						display="flex"
						flex-direction="column"
						height="100%"
						align-items="center"
						padding="40px 30px 40px 30px"
						background="#ffffff"
						border-width="8px"
						border-radius="8px"
						hover-box-shadow="0 5px 50px 0 rgba(0,0,0,.08)"
						hover-transform="translateY(-5px)"
						box-shadow="0 0 1px #cccccc"
						transition=".5s"
					>
						<Box
							margin="0px 0px 20px 0px"
							background="#ECECFF"
							width="70px"
							height="70px"
							border-radius="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							position="relative"
						>
							<Icon category="md" icon={MdPeople} size="41px" color="#2513D1" />
							<Icon
								category="md"
								icon={MdDone}
								position="absolute"
								top="0px"
								left="auto"
								right="0px"
								bottom="auto"
								size="19px"
								color="#ffffff"
								background="#2513D1"
								border-radius="100%"
							/>
						</Box>
						<Text font="600 21px --fontFamily-googleNunito" margin="0px 0px 20px 0px" display="inline-block" color="#153144">
							User Behavior Analytics{"\n\n"}
						</Text>
						<Text
							font="600 16px --fontFamily-googleNunito"
							margin="0px 0px 0px 0px"
							display="inline-block"
							text-align="center"
							color="#153144"
						>
							Identify behavior anomalies and uncover potential threats in real time.  Get fully customizable alerts with full audit trail and video recording of all user actions.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.33%" display="flex" lg-width="50%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						padding="0px 0px 0px 0px"
						align-items="center"
						justify-content="center"
						flex-direction="column"
					/>
					{"        "}
					<Box
						display="flex"
						flex-direction="column"
						height="100%"
						align-items="center"
						padding="40px 30px 40px 30px"
						background="#ffffff"
						border-width="8px"
						border-radius="8px"
						hover-box-shadow="0 5px 50px 0 rgba(0,0,0,.08)"
						hover-transform="translateY(-5px)"
						box-shadow="0 0 1px #cccccc"
						transition=".5s"
					>
						<Box
							margin="0px 0px 20px 0px"
							background="#ECECFF"
							width="70px"
							height="70px"
							border-radius="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							position="relative"
						>
							<Icon category="md" icon={MdDataUsage} size="41px" color="#2513D1" />
							<Icon
								category="md"
								icon={MdDone}
								position="absolute"
								top="0px"
								left="auto"
								right="0px"
								bottom="auto"
								size="19px"
								color="#ffffff"
								background="#2513D1"
								border-radius="100%"
							/>
						</Box>
						<Text font="600 21px --fontFamily-googleNunito" margin="0px 0px 20px 0px" display="inline-block" color="#153144">
							Data Loss Prevention{"\n\n"}
						</Text>
						<Text
							font="600 16px --fontFamily-googleNunito"
							margin="0px 0px 0px 0px"
							display="inline-block"
							text-align="center"
							color="#153144"
						>
							Leverage Staffcop's industry-defining DLP features such as OCR, fingerprinting, and content discovery to prevent malicious or negligent data exfiltration.

atory requirements.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.33%" display="flex" lg-width="50%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						padding="0px 0px 0px 0px"
						align-items="center"
						justify-content="center"
						flex-direction="column"
					/>
					{"        "}
					<Box
						display="flex"
						flex-direction="column"
						height="100%"
						align-items="center"
						padding="40px 30px 40px 30px"
						background="#ffffff"
						border-width="8px"
						border-radius="8px"
						hover-box-shadow="0 5px 50px 0 rgba(0,0,0,.08)"
						hover-transform="translateY(-5px)"
						box-shadow="0 0 1px #cccccc"
						transition=".5s"
					>
						<Box
							margin="0px 0px 20px 0px"
							background="#ECECFF"
							width="70px"
							height="70px"
							border-radius="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							position="relative"
						>
							<Icon category="md" icon={MdDns} size="41px" color="#2513D1" />
							<Icon
								category="md"
								icon={MdDone}
								position="absolute"
								top="0px"
								left="auto"
								right="0px"
								bottom="auto"
								size="19px"
								color="#ffffff"
								background="#2513D1"
								border-radius="100%"
							/>
						</Box>
						<Text font="600 21px --fontFamily-googleNunito" margin="0px 0px 20px 0px" display="inline-block" color="#153144">
							Employee Monitoring{"\n\n"}
						</Text>
						<Text
							font="600 16px --fontFamily-googleNunito"
							margin="0px 0px 0px 0px"
							display="inline-block"
							text-align="center"
							color="#153144"
						>
							Monitor employee activity with customizable reports to identify team, department, individual level productivity, social media use, time spent on projects, apps, and more.{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.33%" display="flex" lg-width="50%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						padding="0px 0px 0px 0px"
						align-items="center"
						justify-content="center"
						flex-direction="column"
					/>
					{"        "}
					<Box
						display="flex"
						flex-direction="column"
						height="100%"
						align-items="center"
						padding="40px 30px 40px 30px"
						background="#ffffff"
						border-width="8px"
						border-radius="8px"
						hover-box-shadow="0 5px 50px 0 rgba(0,0,0,.08)"
						hover-transform="translateY(-5px)"
						box-shadow="0 0 1px #cccccc"
						transition=".5s"
					>
						<Box
							margin="0px 0px 20px 0px"
							background="#ECECFF"
							width="70px"
							height="70px"
							border-radius="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							position="relative"
						>
							<Icon category="md" icon={MdAccountBalance} size="41px" color="#2513D1" />
							<Icon
								category="md"
								icon={MdDone}
								position="absolute"
								top="0px"
								left="auto"
								right="0px"
								bottom="auto"
								size="19px"
								color="#ffffff"
								background="#2513D1"
								border-radius="100%"
							/>
						</Box>
						<Text font="600 21px --fontFamily-googleNunito" margin="0px 0px 20px 0px" display="inline-block" color="#153144">
							Compliance & Audit{"\n\n"}
						</Text>
						<Text
							font="600 16px --fontFamily-googleNunito"
							margin="0px 0px 0px 0px"
							display="inline-block"
							text-align="center"
							color="#153144"
						>
							Ensure ongoing compliance for GDPR, HIPAA, PCI and much more by identifying and alerting user to non-compliant actions with real time alerts.{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.33%" display="flex" lg-width="50%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						padding="0px 0px 0px 0px"
						align-items="center"
						justify-content="center"
						flex-direction="column"
					/>
					{"        "}
					<Box
						display="flex"
						flex-direction="column"
						height="100%"
						align-items="center"
						padding="40px 30px 40px 30px"
						background="#ffffff"
						border-width="8px"
						border-radius="8px"
						hover-box-shadow="0 5px 50px 0 rgba(0,0,0,.08)"
						hover-transform="translateY(-5px)"
						box-shadow="0 0 1px #cccccc"
						transition=".5s"
					>
						<Box
							margin="0px 0px 20px 0px"
							background="#ECECFF"
							width="70px"
							height="70px"
							border-radius="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							position="relative"
						>
							<Icon category="md" icon={MdCardTravel} size="41px" color="#2513D1" />
							<Icon
								category="md"
								icon={MdDone}
								position="absolute"
								top="0px"
								left="auto"
								right="0px"
								bottom="auto"
								size="19px"
								color="#ffffff"
								background="#2513D1"
								border-radius="100%"
							/>
						</Box>
						<Text font="600 21px --fontFamily-googleNunito" margin="0px 0px 20px 0px" display="inline-block" color="#153144">
							Insider Threat Prevention{"\n\n"}
						</Text>
						<Text
							font="600 16px --fontFamily-googleNunito"
							margin="0px 0px 0px 0px"
							display="inline-block"
							text-align="center"
							color="#153144"
						>
							Automate risk detection and block unwanted employee behavior. Teramind uses smart rules &amp; alerts to always keep your organization safe.{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="0px 0 0px 0">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px" width="100%">
				{"    "}
				<StackItem width="33.333%" display="flex">
					<Override
						slot="StackItemContent"
						background="#2513D1"
						flex-direction="column"
						justify-content="center"
						padding="40px 20px 40px 40px"
						align-items="flex-start"
					/>
					{"        "}
					<Text font="normal 600 25px/1.5 --fontFamily-googleNunito" margin="0px 0px 5px 0px" display="inline-block" color="#ffffff">
						STARTER{"\n\n"}
					</Text>
					<Hr
						border-width="1px 0 0 0"
						border-color="#ffffff"
						width="30%"
						text-align="left"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						margin="16px auto 16px 0px"
					/>
					<Text font="normal 600 17px/1.5 --fontFamily-googleNunito" margin="0px 0px 30px 0px" display="inline-block" color="#ffffff">
						Screen Recording & live view, website and apps tracking.{"\n\n"}
					</Text>
					<Link
						href="#"
						text-transform="uppercase"
						font="600 18px --fontFamily-googleNunito"
						color="#ffffff"
						hover-text-decoration-line="initial"
						text-decoration-line="initial"
						border-width="1px"
						border-style="solid"
						padding="10px 15px 10px 15px"
						hover-background="#ffffff"
						hover-color="#2513D1"
					>
						Try for free{"\n\n"}
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="33.333%" display="flex">
					<Override
						slot="StackItemContent"
						background="#FF0000"
						flex-direction="column"
						justify-content="center"
						padding="40px 20px 40px 40px"
						align-items="flex-start"
					/>
					{"        "}
					<Text font="normal 600 25px/1.5 --fontFamily-googleNunito" margin="0px 0px 5px 0px" display="inline-block" color="#ffffff">
						UAM{"\n\n"}
					</Text>
					<Hr
						border-width="1px 0 0 0"
						border-color="#ffffff"
						width="30%"
						text-align="left"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						margin="16px auto 16px 0px"
					/>
					<Text font="normal 600 17px/1.5 --fontFamily-googleNunito" margin="0px 0px 30px 0px" display="inline-block" color="#ffffff">
						User activity monitoring, audit, forensics, UBA, policies and rules.{"\n\n"}
					</Text>
					<Link
						href="#"
						text-transform="uppercase"
						font="600 18px --fontFamily-googleNunito"
						color="#ffffff"
						hover-text-decoration-line="initial"
						text-decoration-line="initial"
						border-width="1px"
						border-style="solid"
						padding="10px 15px 10px 15px"
						hover-background="#ffffff"
						hover-color="#2513D1"
					>
						Try for free{"\n\n"}
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="33.333%" display="flex">
					<Override
						slot="StackItemContent"
						background="#153144"
						flex-direction="column"
						justify-content="center"
						padding="40px 20px 40px 40px"
						align-items="flex-start"
					/>
					{"        "}
					<Text font="normal 600 25px/1.5 --fontFamily-googleNunito" margin="0px 0px 5px 0px" display="inline-block" color="#ffffff">
						DLP
					</Text>
					<Hr
						border-width="1px 0 0 0"
						border-color="#ffffff"
						width="30%"
						text-align="left"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						margin="16px auto 16px 0px"
					/>
					<Text font="normal 600 17px/1.5 --fontFamily-googleNunito" margin="0px 0px 30px 0px" display="inline-block" color="#ffffff">
						Staffcop UAM plus content-based data exfiltration rules.{"\n\n"}
					</Text>
					<Link
						href="#"
						text-transform="uppercase"
						font="600 18px --fontFamily-googleNunito"
						color="#ffffff"
						hover-text-decoration-line="initial"
						text-decoration-line="initial"
						border-width="1px"
						border-style="solid"
						padding="10px 15px 10px 15px"
						hover-background="#ffffff"
						hover-color="#2513D1"
					>
						Try for free{"\n\n"}
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="60px 0 60px 0" background="#F4F7FC">
			<Override slot="SectionContent" max-width="1170px" />
			<Stack>
				{"    "}
				<StackItem width="50%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" justify-content="center" padding="0px 20px 0px 0px" />
					{"        "}
					<Text font="800 38px --fontFamily-googleNunito" margin="0px 0px 5px 0px" display="inline-block" color="#153144">
						Starter
					</Text>
					<Hr
						border-width="4px 0 0 0"
						border-color="#153144"
						width="52px"
						text-align="left"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						margin="10px auto 30px 3px"
						padding="0px 0px 1px 0px"
						transform="skew(38deg)"
					/>
					<Text font="600 18px --fontFamily-googleNunito" margin="0px 0px 40px 0px" display="inline-block" color="#153144">
						Our most affordable, employee monitoring solution for startups and small businesses with powerful features such as real-time activity tracking, video capture and playback, and a set of productivity optimization tools.{"\n\n"}
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 15px 0px" lg-flex-direction="column">
						<Box display="flex" box-shadow="0 2px 48px 0 rgba(0, 0, 0, 0.08)" margin="0px 10px 0px 0px" lg-margin="0px 10px 10px 0px">
							<Icon
								category="io"
								icon={IoMdCloudDone}
								color="#ffffff"
								padding="15px 15px 15px 15px"
								background="#2513D1"
								border-radius="8px 0px 0px 8px"
							/>
							<Text
								font="600 18px --fontFamily-googleNunito"
								color="#153144"
								margin="0px 0px 0px 0px"
								padding="15px 15px 15px 15px"
								width="100%"
								background="#ffffff"
								border-radius="0px 8px 8px 0px"
								transition=".5s"
								hover-background="#2513D1"
								hover-color="#ffffff"
							>
								Employee Monitoring
							</Text>
						</Box>
						<Box display="flex" box-shadow="0 2px 48px 0 rgba(0, 0, 0, 0.08)" margin="0px 10px 0px 0px">
							<Icon
								category="io"
								icon={IoMdCloudDone}
								color="#ffffff"
								padding="15px 15px 15px 15px"
								background="#2513D1"
								border-radius="8px 0px 0px 8px"
							/>
							<Text
								font="600 18px --fontFamily-googleNunito"
								color="#153144"
								margin="0px 0px 0px 0px"
								padding="15px 15px 15px 15px"
								width="100%"
								background="#ffffff"
								border-radius="0px 8px 8px 0px"
								transition=".5s"
								hover-background="#2513D1"
								hover-color="#ffffff"
							>
								Employee Monitoring
							</Text>
						</Box>
					</Box>
					<Box display="flex" align-items="center" margin="0px 0px 15px 0px">
						<Box display="flex" box-shadow="0 2px 48px 0 rgba(0, 0, 0, 0.08)" margin="0px 10px 0px 0px">
							<Icon
								category="io"
								icon={IoMdCloudDone}
								color="#ffffff"
								padding="15px 15px 15px 15px"
								background="#2513D1"
								border-radius="8px 0px 0px 8px"
							/>
							<Text
								font="600 18px --fontFamily-googleNunito"
								color="#153144"
								margin="0px 0px 0px 0px"
								padding="15px 15px 15px 15px"
								width="100%"
								background="#ffffff"
								border-radius="0px 8px 8px 0px"
								transition=".5s"
								hover-background="#2513D1"
								hover-color="#ffffff"
							>
								Employee Monitoring
							</Text>
						</Box>
						<Box display="flex" box-shadow="0 2px 48px 0 rgba(0, 0, 0, 0.08)" margin="0px 10px 0px 0px">
							<Icon
								category="io"
								icon={IoMdCloudDone}
								color="#ffffff"
								padding="15px 15px 15px 15px"
								background="#2513D1"
								border-radius="8px 0px 0px 8px"
							/>
							<Text
								font="600 18px --fontFamily-googleNunito"
								color="#153144"
								margin="0px 0px 0px 0px"
								padding="15px 15px 15px 15px"
								width="100%"
								background="#ffffff"
								border-radius="0px 8px 8px 0px"
								transition=".5s"
								hover-background="#2513D1"
								hover-color="#ffffff"
							>
								Employee Monitoring
							</Text>
						</Box>
					</Box>
					<Link
						href="#"
						text-decoration-line="initial"
						text-transform="uppercase"
						font="600 18px --fontFamily-googleNunito"
						color="#153144"
						hover-text-decoration-line="initial"
						border-width="1px"
						border-style="solid"
						padding="10px 15px 10px 15px"
						hover-background="#ffffff"
						hover-color="#2513D1"
						border-color="#153144"
						width="150px"
						text-align="center"
						margin="30px 0px 0px 0px"
					>
						Try for free{"\n\n"}
					</Link>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex">
					{"        "}
					<Image width="100%" src="https://uploads.quarkly.io/5f84eb783d84d4001ec394fc/images/4.png?v=2020-10-13T11:20:52.653Z" />
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="60px 0 60px 0" background="#F4F7FC">
			<Override slot="SectionContent" max-width="1170px" />
			<Stack>
				{"    "}
				<StackItem width="50%" display="flex">
					{"        "}
					<Image width="100%" src="https://uploads.quarkly.io/5f84eb783d84d4001ec394fc/images/5.png?v=2020-10-13T11:21:09.998Z" />
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" justify-content="center" padding="0px 0px 0px 20px" />
					{"        "}
					<Text font="800 38px --fontFamily-googleNunito" margin="0px 0px 5px 0px" display="inline-block" color="#153144">
						UAM{"\n\n"}
					</Text>
					<Hr
						border-width="4px 0 0 0"
						border-color="#153144"
						width="52px"
						text-align="left"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						margin="10px auto 30px 3px"
						padding="0px 0px 1px 0px"
						transform="skew(38deg)"
					/>
					<Text font="600 18px --fontFamily-googleNunito" margin="0px 0px 40px 0px" display="inline-block" color="#153144">
						Staffcop's UAM/User Behavior Analytics (UBA/UEBA) solution comes with everything essential you will need for employee monitoring, third-party monitoring, insider threat detection and workplace productivity optimization use cases.{"\n\n"}
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 15px 0px">
						<Box display="flex" box-shadow="0 2px 48px 0 rgba(0, 0, 0, 0.08)" margin="0px 10px 0px 0px">
							<Icon
								category="io"
								icon={IoMdCloudDone}
								color="#ffffff"
								padding="15px 15px 15px 15px"
								background="#2513D1"
								border-radius="8px 0px 0px 8px"
							/>
							<Text
								font="600 18px --fontFamily-googleNunito"
								color="#153144"
								margin="0px 0px 0px 0px"
								padding="15px 15px 15px 15px"
								width="100%"
								background="#ffffff"
								border-radius="0px 8px 8px 0px"
								transition=".5s"
								hover-background="#2513D1"
								hover-color="#ffffff"
							>
								Employee Monitoring
							</Text>
						</Box>
						<Box display="flex" box-shadow="0 2px 48px 0 rgba(0, 0, 0, 0.08)" margin="0px 10px 0px 0px">
							<Icon
								category="io"
								icon={IoMdCloudDone}
								color="#ffffff"
								padding="15px 15px 15px 15px"
								background="#2513D1"
								border-radius="8px 0px 0px 8px"
							/>
							<Text
								font="600 18px --fontFamily-googleNunito"
								color="#153144"
								margin="0px 0px 0px 0px"
								padding="15px 15px 15px 15px"
								width="100%"
								background="#ffffff"
								border-radius="0px 8px 8px 0px"
								transition=".5s"
								hover-background="#2513D1"
								hover-color="#ffffff"
							>
								Employee Monitoring
							</Text>
						</Box>
					</Box>
					<Box display="flex" align-items="center" margin="0px 0px 15px 0px">
						<Box display="flex" box-shadow="0 2px 48px 0 rgba(0, 0, 0, 0.08)" margin="0px 10px 0px 0px">
							<Icon
								category="io"
								icon={IoMdCloudDone}
								color="#ffffff"
								padding="15px 15px 15px 15px"
								background="#2513D1"
								border-radius="8px 0px 0px 8px"
							/>
							<Text
								font="600 18px --fontFamily-googleNunito"
								color="#153144"
								margin="0px 0px 0px 0px"
								padding="15px 15px 15px 15px"
								width="100%"
								background="#ffffff"
								border-radius="0px 8px 8px 0px"
								transition=".5s"
								hover-background="#2513D1"
								hover-color="#ffffff"
							>
								Employee Monitoring
							</Text>
						</Box>
						<Box display="flex" box-shadow="0 2px 48px 0 rgba(0, 0, 0, 0.08)" margin="0px 10px 0px 0px">
							<Icon
								category="io"
								icon={IoMdCloudDone}
								color="#ffffff"
								padding="15px 15px 15px 15px"
								background="#2513D1"
								border-radius="8px 0px 0px 8px"
							/>
							<Text
								font="600 18px --fontFamily-googleNunito"
								color="#153144"
								margin="0px 0px 0px 0px"
								padding="15px 15px 15px 15px"
								width="100%"
								background="#ffffff"
								border-radius="0px 8px 8px 0px"
								transition=".5s"
								hover-background="#2513D1"
								hover-color="#ffffff"
							>
								Employee Monitoring
							</Text>
						</Box>
					</Box>
					<Link
						href="#"
						text-transform="uppercase"
						font="600 18px --fontFamily-googleNunito"
						color="#153144"
						hover-text-decoration-line="initial"
						text-decoration-line="initial"
						border-width="1px"
						border-style="solid"
						padding="10px 15px 10px 15px"
						hover-background="#ffffff"
						hover-color="#2513D1"
						border-color="#153144"
						width="150px"
						text-align="center"
						margin="30px 0px 0px 0px"
					>
						Try for free{"\n\n"}
					</Link>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="60px 0 60px 0" background="#F4F7FC">
			<Override slot="SectionContent" max-width="1170px" />
			<Stack>
				{"    "}
				<StackItem width="50%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" justify-content="center" padding="0px 20px 0px 0px" />
					{"        "}
					<Text font="800 38px --fontFamily-googleNunito" margin="-20px 0px 5px 0px" display="inline-block" color="#153144">
						DLP{"\n\n"}
					</Text>
					<Hr
						border-width="4px 0 0 0"
						border-color="#153144"
						width="52px"
						text-align="left"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						margin="10px auto 30px 3px"
						padding="0px 0px 1px 0px"
						transform="skew(38deg)"
					/>
					<Text font="600 18px --fontFamily-googleNunito" margin="0px 0px 40px 0px" display="inline-block" color="#153144">
						Staffcop’s endpoint-based Data Loss Prevention solution goes beyond traditional DLP approaches by adding intelligent behavioral analysis, OCR, fingerprinting and advanced risk and compliance management features.
						<br />
						{"\n\n"}
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 15px 0px">
						<Box display="flex" box-shadow="0 2px 48px 0 rgba(0, 0, 0, 0.08)" margin="0px 10px 0px 0px">
							<Icon
								category="io"
								icon={IoMdCloudDone}
								color="#ffffff"
								padding="15px 15px 15px 15px"
								background="#2513D1"
								border-radius="8px 0px 0px 8px"
							/>
							<Text
								font="600 18px --fontFamily-googleNunito"
								color="#153144"
								margin="0px 0px 0px 0px"
								padding="15px 15px 15px 15px"
								width="100%"
								background="#ffffff"
								border-radius="0px 8px 8px 0px"
								transition=".5s"
								hover-background="#2513D1"
								hover-color="#ffffff"
							>
								Employee Monitoring
							</Text>
						</Box>
						<Box display="flex" box-shadow="0 2px 48px 0 rgba(0, 0, 0, 0.08)" margin="0px 10px 0px 0px">
							<Icon
								category="io"
								icon={IoMdCloudDone}
								color="#ffffff"
								padding="15px 15px 15px 15px"
								background="#2513D1"
								border-radius="8px 0px 0px 8px"
							/>
							<Text
								font="600 18px --fontFamily-googleNunito"
								color="#153144"
								margin="0px 0px 0px 0px"
								padding="15px 15px 15px 15px"
								width="100%"
								background="#ffffff"
								border-radius="0px 8px 8px 0px"
								transition=".5s"
								hover-background="#2513D1"
								hover-color="#ffffff"
							>
								Employee Monitoring
							</Text>
						</Box>
					</Box>
					<Box display="flex" align-items="center" margin="0px 0px 15px 0px">
						<Box display="flex" box-shadow="0 2px 48px 0 rgba(0, 0, 0, 0.08)" margin="0px 10px 0px 0px">
							<Icon
								category="io"
								icon={IoMdCloudDone}
								color="#ffffff"
								padding="15px 15px 15px 15px"
								background="#2513D1"
								border-radius="8px 0px 0px 8px"
							/>
							<Text
								font="600 18px --fontFamily-googleNunito"
								color="#153144"
								margin="0px 0px 0px 0px"
								padding="15px 15px 15px 15px"
								width="100%"
								background="#ffffff"
								border-radius="0px 8px 8px 0px"
								transition=".5s"
								hover-background="#2513D1"
								hover-color="#ffffff"
							>
								Employee Monitoring
							</Text>
						</Box>
						<Box display="flex" box-shadow="0 2px 48px 0 rgba(0, 0, 0, 0.08)" margin="0px 10px 0px 0px">
							<Icon
								category="io"
								icon={IoMdCloudDone}
								color="#ffffff"
								padding="15px 15px 15px 15px"
								background="#2513D1"
								border-radius="8px 0px 0px 8px"
							/>
							<Text
								font="600 18px --fontFamily-googleNunito"
								color="#153144"
								margin="0px 0px 0px 0px"
								padding="15px 15px 15px 15px"
								width="100%"
								background="#ffffff"
								border-radius="0px 8px 8px 0px"
								transition=".5s"
								hover-background="#2513D1"
								hover-color="#ffffff"
							>
								Employee Monitoring
							</Text>
						</Box>
					</Box>
					<Link
						href="#"
						text-transform="uppercase"
						font="600 18px --fontFamily-googleNunito"
						color="#153144"
						hover-text-decoration-line="initial"
						text-decoration-line="initial"
						border-width="1px"
						border-style="solid"
						padding="10px 15px 10px 15px"
						hover-background="#ffffff"
						hover-color="#2513D1"
						border-color="#153144"
						width="150px"
						text-align="center"
						margin="30px 0px 0px 0px"
					>
						Try for free{"\n\n"}
					</Link>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex">
					{"        "}
					<Image width="100%" src="https://uploads.quarkly.io/5f84eb783d84d4001ec394fc/images/6.png?v=2020-10-13T11:21:34.299Z" height="90%" />
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="linear-gradient(rgba(37, 19, 209, 0.43), rgba(37, 19, 209, 0.43)),transparent url(https://uploads.quarkly.io/5f84eb783d84d4001ec394fc/images/1.jpg?v=2020-10-13T11:22:55.645Z) center center/cover no-repeat fixed" padding="50px 0 50px 0">
			<Override slot="SectionContent" max-width="1170px" />
			<Stack>
				{"    "}
				<StackItem width="33%" display="flex" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Stack gap="--cmp-stack-gap-small">
						{"    "}
						<StackItem width="35%" display="flex">
							<Override slot="StackItemContent" align-items="center" justify-content="center" />
							{"        "}
							<Box
								height="90px"
								width="90px"
								background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f84eb783d84d4001ec394fc/images/4.png?v=2020-10-13T12:50:00.889Z) 0% 0% /contain repeat scroll padding-box"
								align-items="center"
								display="flex"
								justify-content="center"
							>
								<Icon category="fa" icon={FaUsers} size="40px" color="#ffffff" />
							</Box>
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="65%" display="flex">
							<Box display="flex" flex-direction="column">
								<Text font="800 38px --fontFamily-googleNunito" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
									2 500 +{"\n\n"}
								</Text>
								<Text font="800 14px --fontFamily-googleNunito" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
									КОМПАНИЙ УЖЕ ИСПОЛЬЗУЮТ STAFFCOP{"\n\n"}
								</Text>
							</Box>
							{"        "}{"    "}
						</StackItem>
					</Stack>
					{"    "}
				</StackItem>
				<StackItem width="33%" display="flex" lg-width="50%">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Stack gap="--cmp-stack-gap-small">
						{"    "}
						<StackItem width="35%" display="flex">
							<Override slot="StackItemContent" align-items="center" justify-content="center" />
							{"        "}
							<Box
								width="90px"
								height="90px"
								background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f84eb783d84d4001ec394fc/images/4.png?v=2020-10-13T12:50:00.889Z) 0% 0% /contain repeat scroll padding-box"
								display="flex"
								align-items="center"
								justify-content="center"
							>
								<Icon category="fa" icon={FaSuitcase} size="40px" color="#ffffff" />
							</Box>
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="65%" display="flex">
							<Box display="flex" flex-direction="column">
								<Text font="800 38px --fontFamily-googleNunito" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
									150 000 +
								</Text>
								<Text font="800 14px --fontFamily-googleNunito" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
									КОНТРОЛИРУЕМЫХ РАБОЧИХ СТАНЦИЙ
								</Text>
							</Box>
							{"        "}{"    "}
						</StackItem>
					</Stack>
					{"    "}
				</StackItem>
				<StackItem width="33%" display="flex" lg-width="50%">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Stack gap="--cmp-stack-gap-small">
						{"    "}
						<StackItem width="35%" display="flex">
							<Override slot="StackItemContent" align-items="center" justify-content="center" />
							{"        "}
							<Box
								width="90px"
								height="90px"
								background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f84eb783d84d4001ec394fc/images/4.png?v=2020-10-13T12:50:00.889Z) 0% 0% /contain repeat scroll padding-box"
								display="flex"
								align-items="center"
								justify-content="center"
							>
								<Icon category="fa" icon={FaFireAlt} size="40px" color="#ffffff" />
							</Box>
							{"    "}
						</StackItem>
						{"    "}
						<StackItem width="65%" display="flex">
							<Box display="flex" flex-direction="column">
								<Text font="800 38px --fontFamily-googleNunito" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
									97%
								</Text>
								<Text font="800 14px --fontFamily-googleNunito" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
									КОМПАНИЙ ВЫЯВЛЯЮТ ГРУБЫЕ НАРУШЕНИЯ В ПЕРВЫЕ 30 ДНЕЙ
								</Text>
							</Box>
							{"        "}{"    "}
						</StackItem>
					</Stack>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="60px 0 60px 0">
			<Override slot="SectionContent" max-width="1170px" />
			<Components.Price size="3" active="4" design="vertical" border-width="1px">
				<Override
					slot="Column"
					border-width="1px 1px 1px 1px"
					border-style="solid"
					border-color="rgba(228, 232, 236, 0.96)"
					hover-background="rgba(37, 19, 209, 0.13)"
				/>
				<Override slot="Column Descr" color="#153144" font="600 15px --fontFamily-googleNunito" margin="0px 64px 0px 64px" />
				<Override slot="Column Price" color="#153144" font="700 48px/48px --fontFamily-googleNunito" />
				<Override slot="Column Title" color="#153144" font="600 20px/30px --fontFamily-googleNunito" />
				<Override slot="Column Button" color="#153144" />
			</Components.Price>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--light"
				hover-color="--primary"
				font="16px --fontFamily-googleNunito"
			>
				hello@company.com
			</Link>
		</Section>
	</Theme>;
});